import { PointArray, SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import merge from 'ts-deepmerge'
import { PolydrawConfig, Polydraw, PolydrawData } from './types'
import {
    getMouseCords,
    getRandomId,
    getRelativeCords,
    isCordsInside,
} from './utilities'
import * as E from './elements'
import { configDefault } from './constants'
import { polygon2object } from './utilities/polygon2object'
import { clearScene } from './helpers/clearScene'

export const polydraw = (target: string, config: PolydrawConfig) => {
    const svg = SVG()
    const uid = getRandomId()
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
            const objects = this.polygons.map(polygon2object)
            return {
                uid,
                objects,
            }
        },
    }

    svg.addTo(target)
    svg.size(1000, 1000)

    svg.on('mousedown', (ev) => {
        const cords = getRelativeCords(
            getMouseCords(ev as MouseEvent),
            svg.node,
        )
        const isStart = !state.points.length
        const target = ev.target as HTMLElement

        state.guide?.remove()

        if (target.dataset.preventDrawing) {
            return
        }

        if (isStart) {
            const point = E.point(svg, cords, state.config.elements.point)

            state.isDrawGuide = true
            state.points.push(point)
        } else {
            const { points, config } = state
            const isComplete = isCordsInside(
                cords,
                points[0].cords,
                config.elements.point.size,
            )

            if (isComplete) {
                const polygon = E.polygon(
                    svg,
                    state.pointsArray,
                    config.elements.polygon,
                )

                state.polygons.push(polygon)
                clearScene(state)
            } else {
                const point = E.point(svg, cords, state.config.elements.point)
                state.points.push(point)

                if (!state.circuit) {
                    state.circuit = E.circuit(
                        svg,
                        state.pointsArray,
                        state.config.elements.circuit,
                    )
                } else {
                    state.circuit.update(state.pointsArray)
                }
            }
        }
    })

    svg.on('mousemove', (ev) => {
        if (!state.isDrawGuide) return

        const start = state.points[state.points.length - 1].cords
        const end = getRelativeCords(getMouseCords(ev as MouseEvent), svg.node)

        state.guide?.remove()
        state.guide = E.guide(svg, start, end, state.config)
    })

    window.addEventListener('keyup', (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') {
            clearScene(state)
        }
    })

    return {
        data: state.data,
    }
}
