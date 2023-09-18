import { PointArray, SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import merge from 'ts-deepmerge'
import { PolydrawConfig, Polydraw } from './types'
import { getMouseCords, getRelativeCords, isCordsInside } from './utilities'
import * as E from './elements'
import { configDefault } from './constants'

export const polydraw = (target: string, config: PolydrawConfig) => {
    const svg = SVG()
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
    }

    svg.addTo(target)
    svg.size(1000, 1000)

    svg.click((ev: MouseEvent) => {
        const cords = getRelativeCords(getMouseCords(ev), svg.node)
        const isStart = !state.points.length
        const target = ev.target as HTMLElement

        state.guide?.remove()
        if (target.dataset.preventDrawing) {
            return
        }

        if (isStart) {
            const point = E.point(svg, cords, state.config.point)

            state.isDrawGuide = true
            state.points.push(point)
        } else {
            const { points, config } = state
            const isComplete = isCordsInside(
                cords,
                points[0].cords,
                config.point.size,
            )

            if (isComplete) {
                const polygon = E.polygon(
                    svg,
                    state.pointsArray,
                    config.polygon,
                )

                state.polygons.push(polygon)

                state.isDrawGuide = false
                state.points.forEach((point) => point.remove())
                state.points = []
                state.polygons.push()
                state.circuit?.remove()
                state.circuit = null
            } else {
                const point = E.point(svg, cords, state.config.point)
                state.points.push(point)

                if (!state.circuit) {
                    state.circuit = E.circuit(
                        svg,
                        state.pointsArray,
                        state.config.circuit,
                    )
                } else {
                    state.circuit.update(state.pointsArray)
                }
            }
        }
    })

    svg.mousemove((ev: MouseEvent) => {
        if (!state.isDrawGuide) return

        const start = state.points[state.points.length - 1].cords
        const end = getRelativeCords(getMouseCords(ev), svg.node)

        state.guide?.remove()
        state.guide = E.guide(svg, start, end, state.config)
    })
}
