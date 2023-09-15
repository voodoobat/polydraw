import { Point, Svg } from '@svgdotjs/svg.js'
import { getCenteredCords } from '../utilities'
import { PointConfig } from '../types'

export const point = (svg: Svg, cords: Point, config: PointConfig) => {
    const { size } = config
    const { x, y } = getCenteredCords(cords, size, size)

    const el = svg.circle(size).move(x, y).fill(config.fill)

    const update = (cords: Point) => {
        el.move(...getCenteredCords(cords, size, size).toArray())
    }

    const remove = () => {
        el.remove()
    }

    return {
        cords,
        update,
        remove,
    }
}
