import { SVG } from '@svgdotjs/svg.js'
import merge from 'ts-deepmerge'
import { Config, Polydraw } from './types'
import { getRelativeCords } from './utilities'
import { point } from './elements'
import { configDefault } from './constants/configDefault'

export const polydraw = (config: Config): Polydraw => ({
    svg: SVG(),
    config: merge(configDefault, config),

    init() {
        this.svg.addTo(config.target)
        this.svg.size(1000, 1000)

        this.svg.click((ev: MouseEvent) => {
            const cords = getRelativeCords(ev)
            point(this.svg, cords, this.config.point)
        })
    },
})
