import { Point, PointArray, Svg } from '@svgdotjs/svg.js'
import { PointElement, PolygonConfig } from '../types'
import { getRandomId } from '../utilities'
import * as E from '.'
import { setPreventDrawing } from '../utilities/setPreventDrawing'

export const polygon = (svg: Svg, path: PointArray, config: PolygonConfig) => {
    const uid = getRandomId()
    const state: { points: PointElement[]; path: PointArray } = {
        points: [],
        get path() {
            return this.points.map(({ cords }) => cords.toArray()) as PointArray
        },
    }

    const poly = svg.polygon(path).fill(config.color).opacity(config.opacity)

    poly.draggable()
    setPreventDrawing(poly)

    state.points = path.map((xy) => {
        return E.point(svg, new Point(xy), config.point, (uid, cords) => {
            const found = state.points.find((point) => {
                return point.uid === uid
            })

            if (found) {
                found.cords = cords
                poly.plot(state.path)
            }
        })
    })

    return {
        uid,
    }
}
