import { Point } from '@svgdotjs/svg.js'

export const isCordsInside = (src: Point, dest: Point, round: number = 2) => {
    return (
        dest.x + round > src.x &&
        dest.x - round < src.x &&
        dest.y + round > src.y &&
        dest.y - round < src.y
    )
}
