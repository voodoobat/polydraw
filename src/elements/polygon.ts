import { Point, PointArray, Svg } from '@svgdotjs/svg.js'
import { PointElement, PolygonConfig } from '../types'
import * as U from '../utilities'
import * as E from '.'
import { setPreventDrawing } from '../helpers'

export const polygon = (svg: Svg, path: PointArray, config: PolygonConfig) => {
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
    setPreventDrawing(poly)

    setTimeout(() => {
        svg.fire('polygonCreate', { uid })
    }, 0)

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

        svg.fire('polygonDragEnd', { uid })
    })

    poly.node.addEventListener('contextmenu', (ev) => {
        ev.preventDefault()
        const cords = U.getRelativeCords(
            U.getMouseCords(ev as MouseEvent),
            svg.node,
        )

        svg.fire('menu', { uid, cords })
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
                svg.fire('polygonDragEnd', { uid })
            },
        })
    })

    const remove = () => {
        poly.remove()
        state.points.forEach((point) => point.remove())
    }

    return {
        uid,
        points: state.points,
        remove,
    }
}
