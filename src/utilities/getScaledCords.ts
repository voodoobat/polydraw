import { PointArray } from '@svgdotjs/svg.js'

export const getScaledCords = (points: PointArray, scale = 1) => {
    return points.map((point) => {
        return [point[0] / scale, point[1] / scale]
    }) as PointArray
}
