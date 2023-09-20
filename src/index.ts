import { PointArray, SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import merge from 'ts-deepmerge'
import { PolydrawConfig, Polydraw, PolydrawData } from './types'
import { configDefault } from './constants'
import * as U from './utilities'
import * as E from './elements'
import * as H from './helpers'

export const polydraw = (target: string, config: PolydrawConfig) => {
    const svg = SVG()
    const uid = U.getRandomId()
    const state: Polydraw = {
        isDrawGuide: false,
        points: [],
        polygons: [],
        guide: null,
        circuit: null,
        config: merge(configDefault, config),
        get pointsArray() {
            return this.points.map(({ cords }) => cords.toArray()) as PointArray
        },
        get data(): PolydrawData {
            const polygon = this.polygons.map(U.polygon2object)
            return {
                uid,
                polygon,
            }
        },
    }

    svg.addTo(target)
    svg.size(1000, 1000)

    svg.on('mousedown', (ev) => {
        const cords = U.getRelativeCords(
            U.getMouseCords(ev as MouseEvent),
            svg.node,
        )
        const isStart = !state.points.length
        const target = ev.target as HTMLElement

        state.guide?.remove()

        if (target.dataset.preventDrawing) {
            return
        }

        if (isStart) {
            H.startDrawing(svg, state, cords)
        } else {
            const { points, config } = state
            const isComplete = U.isCordsInside(
                cords,
                points[0].cords,
                config.elements.point.size,
            )

            if (isComplete) {
                H.placePolygon(svg, state, config.elements.polygon, (uid) => {
                    const changed = state.polygons.find((obj) => {
                        return obj.uid === uid
                    })

                    if (changed && config.events.onPolygonChange) {
                        config.events.onPolygonChange(changed)
                    }
                })
                H.clearScene(state)

                if (config.events.onPolygonCreate) {
                    const polygon = state.polygons[state.polygons.length - 1]
                    config.events.onPolygonCreate(polygon)
                }
            } else {
                H.continueDrawing(svg, state, cords)
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

    window.addEventListener('keyup', (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') {
            H.clearScene(state)
        }
    })

    return {
        get data() {
            return state.data
        },
    }
}
