import { PointArray, Svg } from '@svgdotjs/svg.js'
import { CircuitConfig } from '../types'

export const circuit = (
    svg: Svg,
    points: PointArray,
    config: CircuitConfig,
) => {
    const el = svg
        .polyline(points)
        .stroke({
            width: config.size,
            color: config.color,
            opacity: config.opacity,
        })
        .fill('transparent')

    const update = (points: PointArray) => {
        el.plot(points)
    }

    return {
        update,
    }
}
