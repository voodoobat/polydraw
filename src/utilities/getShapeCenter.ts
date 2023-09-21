import { Point, PointArray } from '@svgdotjs/svg.js'

export const getShapeCenter = (path: PointArray) => {
    const xArray = path.map((e) => e[0])
    const yArray = path.map((e) => e[1])
    const xMax = Math.max(...xArray)
    const xMin = Math.min(...xArray)
    const yMax = Math.max(...yArray)
    const yMin = Math.min(...yArray)

    const x = xMin + (xMax - xMin) / 2
    const y = yMin + (yMax - yMin) / 2

    return new Point(x, y)
}
