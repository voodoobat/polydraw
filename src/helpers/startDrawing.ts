import { Point, Svg } from '@svgdotjs/svg.js'
import * as E from '../elements'
import { Polydraw } from '../types'

export const startDrawing = (svg: Svg, state: Polydraw, cords: Point) => {
    const point = E.point(svg, cords, state.config.elements.point)

    state.isDrawGuide = true
    state.points.push(point)
}
