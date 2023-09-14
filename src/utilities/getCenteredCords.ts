import { Point } from '@svgdotjs/svg.js'

export const getCenteredCords = ({ x, y }: Point, szX: number, szY: number) => {
    return new Point(x - szX / 2, y - szY / 2)
}
