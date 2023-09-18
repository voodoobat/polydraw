import { PointArray, Svg } from '@svgdotjs/svg.js'
import { Polydraw, PolydrawConfig } from '../types'
import { getMouseCords, getRelativeCords, isCordsInside } from '../utilities'
import * as E from './index'

export const scene = (svg: Svg, config: PolydrawConfig) => {
    const rect = svg
        .rect(svg.node.clientWidth, svg.node.clientHeight)
        .attr({
            fill: 'transparent',
        })
        .css('position', 'relative')
        .css('zIndex', '10')
    const state: Polydraw = {
        isDrawGuide: false,
        points: [],
        polygons: [],
        guide: null,
        circuit: null,
        config,

        get pointsArray() {
            return this.points.map(({ cords }) => cords.toArray()) as PointArray
        },
    }

    rect.click((ev: MouseEvent) => {
        const cords = getRelativeCords(getMouseCords(ev), svg.node)
        const isStart = !state.points.length

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

    rect.mousemove((ev: MouseEvent) => {
        if (!state.isDrawGuide) return

        const start = state.points[state.points.length - 1].cords
        const end = getRelativeCords(getMouseCords(ev), svg.node)

        state.guide?.remove()
        state.guide = E.guide(svg, start, end, state.config)
    })

    return {}
}
