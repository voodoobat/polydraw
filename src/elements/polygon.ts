import { Point, PointArray, Svg } from '@svgdotjs/svg.js'
import { PolygonConfig } from '../types'
import { getRandomId } from '../utilities'
import * as E from '.'

export const polygon = (svg: Svg, path: PointArray, config: PolygonConfig) => {
    const uid = getRandomId()
    const points = path.map((xy) => {
        return E.point(svg, new Point(xy), {
            ...config.point,
        })
    })

    svg.polygon(path).fill(config.color).opacity(config.opacity)

    return {
        uid,
    }
}
