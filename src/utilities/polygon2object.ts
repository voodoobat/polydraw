import { PolydrawDataObject, PolygonElement } from '../types'

export const polygon2object = (polygon: PolygonElement): PolydrawDataObject => {
    return {
        points: polygon.points.map(({ cords }) => cords),
    }
}
