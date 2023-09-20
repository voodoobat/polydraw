import { PolydrawDataObject, PolygonElement } from '../types'

export const polygon2object = (polygon: PolygonElement): PolydrawDataObject => {
    return {
        uid: polygon.uid,
        points: polygon.points.map(({ cords }) => cords),
    }
}
