import { Point } from '@svgdotjs/svg.js'

export interface Polydraw {
    config: PolydrawConfig
    points: PointElement[]
    guide: GuideElement | null
    isDrawGuide: boolean
}

export interface PolydrawConfig {
    target: string
    point: PointConfig
    guide: GuideConfig
}

export interface PointElement {
    cords: Point
    update: (cords: Point) => void
}

export interface GuideElement {
    update: (start: Point, end: Point) => void
}

export interface PointConfig {
    size: number
    fill: string
}

export interface GuideConfig {
    size: number
    color: string
    opacity: number
}
