import { PointArray, Svg } from '@svgdotjs/svg.js'
import { Polydraw, PolygonConfig } from '../types'
import * as E from '../elements'

export const placePolygon = (
    svg: Svg,
    state: Polydraw,
    points: PointArray,
    config: PolygonConfig,
    onChange: ((uid: string) => void) | null,
) => {
    state.polygons.push(
        E.polygon(svg, points, config, {
            onDragComplete: (uid) => {
                if (onChange) onChange(uid)
            },
            onRemove: (uid) => {
                console.log(uid)
            },
        }),
    )
}
