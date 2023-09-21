import { Point } from '@svgdotjs/svg.js'
import { PolydrawDataObject, PolygonElement } from '../types'

export const polygon2object = (
    polygon: PolygonElement,
    scale = 1,
): PolydrawDataObject => {
    return {
        points: polygon.points.map(
            ({ cords }) => new Point(cords.x * scale, cords.y * scale),
        ),
    }
}
