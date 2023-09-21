import { Point, PointArray, Shape } from '@svgdotjs/svg.js'

export interface Polydraw {
    config: PolydrawConfig
    scale: number
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
        onSceneChange: ((data: PolydrawData) => void) | null
        onPolygonChange: ((polygon: PolydrawDataObject) => void) | null
        onPolygonCreate: ((polygon: PolydrawDataObject) => void) | null
    }
}

export interface PolydrawData {
    url: string
    polygon: PolydrawDataObject[]
}

export interface PolydrawDataObject {
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
