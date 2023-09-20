import { Svg } from '@svgdotjs/svg.js'
import { Polydraw, PolygonConfig } from '../types'
import * as E from '../elements'

export const placePolygon = (
    svg: Svg,
    state: Polydraw,
    config: PolygonConfig,
    onChange: ((uid: string) => void) | null,
) => {
    state.polygons.push(
        E.polygon(svg, state.pointsArray, config, {
            onDragComplete: (uid) => {
                if (onChange) onChange(uid)
            },
        }),
    )
}
