import { PointArray, SVG } from '@svgdotjs/svg.js'
import merge from 'ts-deepmerge'
import { Config, Polydraw } from './types'
import { getRelativeCords } from './utilities'
import * as E from './elements'
import { configDefault } from './constants/configDefault'

export const polydraw = (config: Config): Polydraw => ({
    svg: SVG(),
    isDrawGuide: false,
    points: [],
    guide: null,
    config: merge(configDefault, config),

    init() {
        this.svg.addTo(config.target)
        this.svg.size(1000, 1000)

        this.svg.click((ev: MouseEvent) => {
            const cords = getRelativeCords(ev, this.svg.node)
            const point = E.point(this.svg, cords, this.config.point)

            this.isDrawGuide = true
            this.points.push(point)
        })

        this.svg.mousemove((ev: MouseEvent) => {
            if (!this.isDrawGuide) return

            const { cords } = this.points[this.points.length - 1]
            const { x, y } = getRelativeCords(ev, this.svg.node)
            const path = new PointArray([
                [cords.x, cords.y],
                [x, y],
            ])

            if (!this.guide) {
                return (this.guide = E.guide(this.svg, path, this.config.guide))
            }

            this.guide.el.plot(path)
        })
    },
})
