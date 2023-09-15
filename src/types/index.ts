import { Point, PointArray } from '@svgdotjs/svg.js'

export interface Polydraw {
    config: PolydrawConfig
    points: PointElement[]
    pointsArray: PointArray
    guide: GuideElement | null
    circuit: CircuitElement | null
    isDrawGuide: boolean
}

export interface PolydrawConfig {
    target: string
    point: PointConfig
    guide: GuideConfig
    circuit: CircuitConfig
}

export interface PointElement {
    cords: Point
    update: (cords: Point) => void
    remove: () => void
}

export interface GuideElement {
    update: (start: Point, end: Point) => void
    remove: () => void
}

export interface CircuitElement {
    update: (points: PointArray) => void
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

export interface CircuitConfig {
    size: number
    color: string
    opacity: number
}
