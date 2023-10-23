import { PolydrawConfig } from '../types'

export const configDefault: PolydrawConfig = {
    maxPoints: NaN,
    elements: {
        point: {
            size: 8,
            color: '#087E8B',
            opacity: 0.25,
        },
        guide: {
            size: 1,
            color: '#FF5A5F',
            opacity: 0.25,
        },
        circuit: {
            size: 1,
            color: '#087E8B',
            opacity: 0.25,
        },
        polygon: {
            color: '#C1839F',
            opacity: 0.5,
            point: {
                size: 8,
                color: '#C1839F',
                opacity: 0.5,
            },
        },
        menu: {
            style: {
                fontSize: '0.8em',
                padding: '0.5em 1em',
                lineHeight: '1',
                cursor: 'pointer',
                backgroundColor: '#E56B6F',
                color: '#FFFFFF',
                userSelect: 'none',
            },
        },
    },
    events: {
        onPolygonChange: null,
        onPolygonCreate: null,
        onSceneChange: null,
    },
}
