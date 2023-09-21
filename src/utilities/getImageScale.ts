import { Svg } from '@svgdotjs/svg.js'

export const getImageScale = (image: HTMLImageElement, svg: Svg) => {
    return image.naturalWidth / Number(svg.width())
}
