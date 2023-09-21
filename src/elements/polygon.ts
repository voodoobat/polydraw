import { Point, PointArray, Svg } from '@svgdotjs/svg.js'
import { PointElement, PolygonConfig } from '../types'
import * as U from '../utilities'
import * as E from '.'

interface EventTypes {
    onDragComplete?: ((uid: string) => void) | null
    onRemove?: (uid: string) => void
}

export const polygon = (
    svg: Svg,
    path: PointArray,
    config: PolygonConfig,
    events: EventTypes = {},
) => {
    const uid = U.getRandomId()
    const state: {
        points: PointElement[]
        path: PointArray
    } = {
        points: [],
        get path() {
            return this.points.map(({ cords }) => cords.toArray()) as PointArray
        },
    }

    const poly = svg.polygon(path).fill(config.color).opacity(config.opacity)

    poly.draggable()
    poly.on('dragmove', () => {
        poly.array().forEach((xy, key) => {
            state.points[key].update(new Point(...xy))
            state.points[key].cords = new Point(...xy)
        })
    })

    poly.on('dragend', () => {
        poly.array().forEach((xy, key) => {
            state.points[key].update(new Point(...xy))
            state.points[key].cords = new Point(...xy)
        })

        if (events.onDragComplete) {
            events.onDragComplete(uid)
        }
    })

    state.points = path.map((xy) => {
        return E.point(svg, new Point(xy), config.point, {
            onDrag: (uid, cords) => {
                const found = state.points.find((point) => {
                    return point.uid === uid
                })

                if (found) {
                    found.cords = cords
                    poly.plot(state.path)
                }
            },
            onDragComplete: () => {
                if (typeof events.onDragComplete === 'function') {
                    events.onDragComplete(uid)
                }
            },
        })
    })

    return {
        uid,
        points: state.points,
    }
}
