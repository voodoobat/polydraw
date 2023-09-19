import { PolydrawDataObject, PolygonElement } from '../types'
import { Point } from '@svgdotjs/svg.js'

export const polygon2object = (polygon: PolygonElement): PolydrawDataObject => {
    console.log(polygon)

    return {
        uid: polygon.uid,
        points: [new Point()],
    }
}
