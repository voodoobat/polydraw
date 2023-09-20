import { Point, Svg } from '@svgdotjs/svg.js'
import * as E from '../elements'
import { Polydraw } from '../types'

export const continueDrawing = (svg: Svg, state: Polydraw, cords: Point) => {
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
