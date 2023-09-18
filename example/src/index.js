// import { polydraw } from 'polydraw'
import { polydraw } from '../../dist'

polydraw('#root', {
    point: {
        size: 10,
        fill: 'orange',
    },
    polygon: {
        point: {
            size: 10,
            fill: 'green',
        },
    },
})
