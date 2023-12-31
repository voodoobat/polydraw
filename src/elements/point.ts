import { G, Point, Svg } from '@svgdotjs/svg.js'
import { getCenteredCords, getRandomId, getRelativeCords } from '../utilities'
import { PointConfig } from '../types'
import * as H from '../helpers'

interface EventTypes {
    onDrag?: ((uid: string, cords: Point) => void) | null
    onDragComplete?: (() => void) | null
}

export const point = (
    svg: Svg,
    cords: Point,
    config: PointConfig,
    events: EventTypes = {},
) => {
    const uid = getRandomId()
    const { size } = config
    const { x, y } = getCenteredCords(cords, size, size)
    const el = svg.circle(size).move(x, y).fill(config.color)
    const state: { cords: Point } = {
        cords,
    }

    if (events.onDrag) {
        H.setPreventDrawing(el)
        el.draggable()
        el.on('dragmove', (ev) => {
            // @ts-ignore
            const { clientX, clientY } = ev.detail.event as MouseEvent
            state.cords = getRelativeCords(
                new Point(clientX, clientY),
                svg.node,
            )

            // @ts-ignore
            events.onDrag(uid, state.cords)
        })
    }

    if (events.onDragComplete) {
        el.on('dragend', () => {
            if (typeof events.onDragComplete === 'function') {
                events.onDragComplete()
            }
        })
    }

    const update = (cords: Point) => {
        el.move(...getCenteredCords(cords, size, size).toArray())
        state.cords = cords
    }

    const remove = () => {
        el.remove()
    }

    return {
        uid,
        cords: state.cords,
        el,
        update,
        remove,
    }
}
