import { PolydrawConfig } from '../types'

export const configDefault: PolydrawConfig = {
    target: 'body',
    point: {
        size: 3,
        fill: 'blue',
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
}
