import { Point, Svg } from '@svgdotjs/svg.js'
import { getCenteredCords } from '../utilities'
import { PointConfig } from '../types'

export const point = (svg: Svg, cords: Point, config: PointConfig) => {
    const { size } = config
    const { x, y } = getCenteredCords(cords, size, size)

    return svg.circle(size).move(x, y).fill(config.fill)
}
