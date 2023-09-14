import { Circle, Line, Point, Svg } from '@svgdotjs/svg.js'

export interface Polydraw {
    svg: Svg
    config: Config
    points: PointElement[]
    guide: GuideElement | null
    isDrawGuide: boolean
    init(): void
}

export interface PointElement {
    el: Circle
    cords: Point
}

export interface GuideElement {
    el: Line
}

export interface Config {
    target: string
    point: PointConfig
    guide: GuideConfig
}

export interface PointConfig {
    size: number
    fill: string
}

export interface GuideConfig {
    size: number
    color: string
}
