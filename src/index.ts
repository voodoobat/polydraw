import { SVG } from '@svgdotjs/svg.js'
import merge from 'ts-deepmerge'
import { PolydrawConfig, Polydraw } from './types'
import { getMouseCords, getRelativeCords } from './utilities'
import * as E from './elements'
import { configDefault } from './constants/configDefault'
import { isCordsInside } from './utilities/isCordsInside'

export const polydraw = (config: PolydrawConfig) => {
    const svg = SVG()
    const state: Polydraw = {
        isDrawGuide: false,
        points: [],
        guide: null,
        config: merge(configDefault, config),
    }

    svg.addTo(config.target)
    svg.size(1000, 1000)

    svg.click((ev: MouseEvent) => {
        const cords = getRelativeCords(getMouseCords(ev), svg.node)
        const isStart = !state.points.length

        if (isStart) {
            const point = E.point(svg, cords, state.config.point)

            state.isDrawGuide = true
            state.points.push(point)
        } else {
            if (isCordsInside(cords, state.points[0].cords)) {
                state.isDrawGuide = false
                state.points.forEach((point) => point.remove())
                state.points = []
                state.guide?.remove()
                state.guide = null
            } else {
                const point = E.point(svg, cords, state.config.point)
                state.points.push(point)
            }
        }
    })

    svg.mousemove((ev: MouseEvent) => {
        if (!state.isDrawGuide) return

        const start = state.points[state.points.length - 1].cords
        const end = getRelativeCords(getMouseCords(ev), svg.node)

        if (!state.guide) {
            return (state.guide = E.guide(svg, start, end, state.config))
        }

        state.guide.update(start, end)

        if (state.points.length > 10) {
            state.isDrawGuide = false
        }
    })
}
