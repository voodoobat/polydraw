import { Point } from '@svgdotjs/svg.js'

export const getRelativeCords = (point: Point, el: SVGSVGElement): Point => {
    const { x, y } = el.getBoundingClientRect()

    return new Point(point.x - x, point.y - y)
}
