import { Point, Svg } from '@svgdotjs/svg.js'
import { PolydrawConfig } from '../types'
import * as E from '../elements'

export const guide = (
    svg: Svg,
    start: Point,
    end: Point,
    config: PolydrawConfig,
) => {
    const point = E.point(svg, end, config.point)
    const line = svg.line([start.toArray(), end.toArray()]).stroke({
        width: config.guide.size,
        color: config.guide.color,
        opacity: config.guide.opacity,
    })

    const update = (start: Point, end: Point) => {
        point.update(end)
        line.plot([start.toArray(), end.toArray()])
    }

    const remove = () => {
        point.remove()
        line.remove()
    }

    return {
        update,
        remove,
    }
}
