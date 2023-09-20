import { Svg } from '@svgdotjs/svg.js'
import { Polydraw, PolygonConfig } from '../types'
import * as E from '../elements'

export const placePolygon = (
    svg: Svg,
    state: Polydraw,
    config: PolygonConfig,
) => {
    state.polygons.push(E.polygon(svg, state.pointsArray, config))
}
