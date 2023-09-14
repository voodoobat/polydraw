import { PointArray, Svg } from '@svgdotjs/svg.js'
import { GuideConfig } from '../types'

export const guide = (svg: Svg, path: PointArray, config: GuideConfig) => {
    return {
        el: svg.line(path).stroke({
            width: config.size,
            color: config.color,
            opacity: 0.2,
        }),
    }
}
