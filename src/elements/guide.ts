import { Point, Svg } from '@svgdotjs/svg.js'
import { PolydrawConfig } from '../types'
import * as E from '../elements'

export const guide = (
    svg: Svg,
    start: Point,
    end: Point,
    config: PolydrawConfig,
) => {
    const point = E.point(svg, end, config.elements.point)
    const line = svg.line([start.toArray(), end.toArray()]).stroke({
        width: config.elements.guide.size,
        color: config.elements.guide.color,
        opacity: config.elements.guide.opacity,
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
