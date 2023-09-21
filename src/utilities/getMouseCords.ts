import { Point } from '@svgdotjs/svg.js'

export const getMouseCords = ({ pageX, pageY }: MouseEvent) => {
    return new Point(pageX, pageY)
}
