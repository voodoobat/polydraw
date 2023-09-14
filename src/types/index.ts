import { Svg } from '@svgdotjs/svg.js'

export interface Polydraw {
    svg: Svg
    config: Config
    init(): void
}

export interface Config {
    target: string
    point: PointConfig
}

export interface PointConfig {
    size: number
    fill: string
}
