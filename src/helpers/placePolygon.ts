import { PointArray, Svg } from '@svgdotjs/svg.js'
import { Polydraw, PolygonConfig } from '../types'
import * as E from '../elements'

export const placePolygon = (
    svg: Svg,
    state: Polydraw,
    points: PointArray,
    config: PolygonConfig,
) => {
    state.polygons.push(E.polygon(svg, points, state, config))
}
