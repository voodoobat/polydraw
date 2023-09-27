import { Point, PointArray, SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import merge from 'ts-deepmerge'
import {
    PolydrawConfig,
    Polydraw,
    PolydrawData,
    PolydrawDataObject,
} from './types'
import { configDefault } from './constants'
import * as U from './utilities'
import * as E from './elements'
import * as H from './helpers'

export const polydraw = async (
    target: string,
    img: string,
    config: Partial<PolydrawConfig> = {},
) => {
    const svg = SVG()
    const root = document.querySelector(target) as HTMLElement
    const image = (await U.getImage(img)) as HTMLImageElement
    const state: Polydraw = {
        config: merge(configDefault, config) as PolydrawConfig,
        scale: U.getImageScale(image, root),
        isDrawGuide: false,
        points: [],
        polygons: [],
        guide: null,
        circuit: null,
        menu: null,
        get pointsArray() {
            return this.points.map(({ cords }) => cords.toArray()) as PointArray
        },
        get data(): PolydrawData {
            const polygons = this.polygons.map((obj) =>
                U.polygon2object(obj, state.scale),
            )
            return {
                polygons,
            }
        },
    }

    if (!root) return

    root.style.position = 'relative'
    root.style.width = `${root.getBoundingClientRect().width}px`
    root.setAttribute('this-is-my-attr', 'this-is-my-value')

    console.log('debug root width', root.getBoundingClientRect().width)

    root.appendChild(image)

    // todo: move me into helpers
    image.style.maxWidth = '100%'
    image.style.minWidth = `${image.width}px`
    image.style.height = `${image.height}px`
    image.style.minHeight = `${image.height}px`

    console.log('debug image width', image.width)

    svg.addTo(target)
    svg.size(image.width, image.height)

    svg.node.style.position = 'absolute'
    svg.node.style.left = '0'
    svg.node.style.top = '0'

    svg.on('mousedown', (ev) => {
        const cords = U.getRelativeCords(
            U.getMouseCords(ev as MouseEvent),
            svg.node,
        )

        H.removeMenu(state)

        const isStart = !state.points.length
        const target = ev.target as HTMLElement

        state.guide?.remove()

        if (target.dataset.preventDrawing) {
            return
        }

        if (isStart) {
            H.startDrawing(svg, state, cords)
        } else {
            const isComplete = U.isCordsInside(
                cords,
                state.points[0].cords,
                state.config.elements.point.size,
            )

            if (isComplete) {
                if (state.points.length > 2) {
                    H.placePolygon(
                        svg,
                        state,
                        state.pointsArray,
                        state.config.elements.polygon,
                    )
                    H.clearScene(state)
                }
            } else {
                const isDouble = state.points.find((point) => {
                    return U.isCordsInside(
                        cords,
                        point.cords,
                        state.config.elements.point.size,
                    )
                })

                if (!isDouble) {
                    H.continueDrawing(svg, state, cords)
                }
            }
        }
    })

    svg.on('mousemove', (ev) => {
        if (!state.isDrawGuide) return

        const start = state.points[state.points.length - 1].cords
        const end = U.getRelativeCords(
            U.getMouseCords(ev as MouseEvent),
            svg.node,
        )

        state.guide?.remove()
        state.guide = E.guide(svg, start, end, state.config)
    })

    svg.on('menu', (ev) => {
        // todo: избавиться от ts-ignore
        // @ts-ignore
        const { cords, uid } = ev.detail
        const menuConfig = state.config.elements.menu

        state.menu = E.menu(root, cords, menuConfig, () => {
            const key = state.polygons.findIndex((polygon) => {
                return polygon.uid === uid
            })

            if (state.polygons[key]) {
                state.polygons[key].remove()
                state.polygons = state.polygons.filter((polygon) => {
                    return polygon.uid !== uid
                })

                H.removeMenu(state)
            }
        })
    })

    svg.on('polygonDragEnd', (ev) => {
        // todo: избавиться от ts-ignore
        // @ts-ignore
        const { uid } = ev.detail
        const changed = state.polygons.find((obj) => {
            return obj.uid === uid
        })

        if (changed && state.config.events.onPolygonChange) {
            state.config.events.onPolygonChange(
                U.polygon2object(changed, state.scale),
            )
        }

        if (state.config.events.onSceneChange) {
            state.config.events.onSceneChange(state.data)
        }
    })

    svg.on('polygonCreate', (ev) => {
        // todo: избавиться от ts-ignore
        // @ts-ignore
        const { uid } = ev.detail
        const created = state.polygons.find((obj) => {
            return obj.uid === uid
        })

        if (created && state.config.events.onPolygonCreate) {
            state.config.events.onPolygonCreate(
                U.polygon2object(created, state.scale),
            )
        }

        if (state.config.events.onSceneChange) {
            state.config.events.onSceneChange(state.data)
        }
    })

    window.addEventListener('keyup', (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') {
            H.clearScene(state)
        }
    })

    return {
        placePolygon: (polygon: PolydrawDataObject) => {
            const points = polygon.points.map(({ x, y }) => {
                const point = new Point(x, y)
                return point.toArray()
            }) as PointArray

            H.placePolygon(
                svg,
                state,
                U.getScaledCords(points, state.scale),
                state.config.elements.polygon,
            )
        },
        get data() {
            return state.data
        },
    }
}
