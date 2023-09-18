import { Shape } from '@svgdotjs/svg.js'

export const setPreventDrawing = (el: Shape) => {
    el.attr('data-prevent-drawing', true)
}
