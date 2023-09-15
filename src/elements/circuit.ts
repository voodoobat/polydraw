import { PointArray, Svg } from '@svgdotjs/svg.js'

export const circuit = (svg: Svg, points: PointArray) => {
    const el = svg
        .polyline(points)
        .stroke({
            width: 2,
            color: 'green',
        })
        .fill('transparent')

    const update = (points: PointArray) => {
        el.plot(points)
    }

    return {
        update,
    }
}
