import { PointArray, Svg } from '@svgdotjs/svg.js'
import { PolygonConfig } from '../types'
import { getRandomId } from '../utilities'

export const polygon = (
    svg: Svg,
    points: PointArray,
    config: PolygonConfig,
) => {
    const uid = getRandomId()
    svg.polygon(points).fill(config.color).opacity(config.opacity)

    return {
        uid,
    }
}
