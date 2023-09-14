import { Point } from '@svgdotjs/svg.js'

export const getRelativeCords = (ev: MouseEvent): Point => {
    const el = ev.target as HTMLElement
    const { x, y } = el.getBoundingClientRect()

    return new Point(ev.clientX - x, ev.clientY - y)
}
