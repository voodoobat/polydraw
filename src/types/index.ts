import { Point, PointArray } from '@svgdotjs/svg.js'

export interface Polydraw {
    config: PolydrawConfig
    points: PointElement[]
    polygons: PolygonElement[]
    pointsArray: PointArray
    data: PolydrawData
    guide: GuideElement | null
    circuit: CircuitElement | null
    menu: MenuElement | null
    isDrawGuide: boolean
}

export interface PolydrawConfig {
    elements: {
        point: PointConfig
        guide: GuideConfig
        circuit: CircuitConfig
        polygon: PolygonConfig
        menu: MenuConfig
    }
    events: {
        onPolygonChange: ((polygon: PolygonElement) => void) | null
        onPolygonCreate: ((polygon: PolygonElement) => void) | null
    }
}

export interface PolydrawData {
    uid: string
    polygon: PolydrawDataObject[]
}

export interface PolydrawDataObject {
    uid: string
    points: Point[]
}

export interface PointElement {
    uid: string
    cords: Point
    update: (cords: Point) => void
    remove: () => void
}

export interface PointConfig {
    size: number
    color: string
    opacity: number
}

export interface GuideElement {
    update: (start: Point, end: Point) => void
    remove: () => void
}

export interface GuideConfig {
    size: number
    color: string
    opacity: number
}

export interface CircuitElement {
    update: (points: PointArray) => void
    remove: () => void
}

export interface CircuitConfig {
    size: number
    color: string
    opacity: number
}

export interface PolygonElement {
    uid: string
    points: PointElement[]
    remove: () => void
}

export interface PolygonConfig {
    color: string
    opacity: number
    point: PointConfig
}

export interface MenuElement {
    remove: () => void
}

export interface MenuConfig {
    style: {
        [key: string]: string
    }
}
