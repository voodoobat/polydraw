import { PolydrawConfig } from '../types'

export const configDefault: PolydrawConfig = {
    point: {
        size: 5,
        fill: 'blue',
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
            fill: 'yellow',
            opacity: 0.5,
        },
    },
}
