import { Point } from '@svgdotjs/svg.js'

export const getMouseCords = ({ clientX, clientY }: MouseEvent) => {
    return new Point(clientX, clientY)
}
