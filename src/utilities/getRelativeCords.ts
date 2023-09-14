import { Point } from '@svgdotjs/svg.js'

export const getRelativeCords = (ev: MouseEvent, el: SVGSVGElement): Point => {
    const { x, y } = el.getBoundingClientRect()

    return new Point(ev.clientX - x, ev.clientY - y)
}
