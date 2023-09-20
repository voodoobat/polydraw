import { PolydrawConfig } from '../types'

export const configDefault: PolydrawConfig = {
    elements: {
        point: {
            size: 5,
            color: 'blue',
            opacity: 0.2,
        },
        guide: {
            size: 1,
            color: 'blue',
            opacity: 0.2,
        },
        circuit: {
            size: 1,
            color: 'gray',
            opacity: 0.4,
        },
        polygon: {
            color: 'yellow',
            opacity: 0.4,
            point: {
                size: 5,
                color: 'yellow',
                opacity: 0.5,
            },
        },
    },
    events: {
        onPolygonChange: null,
        onPolygonCreate: null,
    },
}
