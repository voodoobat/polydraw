import { Svg } from '@svgdotjs/svg.js'
import { Polydraw, PolygonConfig } from '../types'
import { polygon } from '../elements'

export const placePolygon = (
    svg: Svg,
    state: Polydraw,
    config: PolygonConfig,
) => {
    state.polygons.push(polygon(svg, state.pointsArray, config))
}
