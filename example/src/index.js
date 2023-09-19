// import { polydraw } from 'polydraw'
import { polydraw } from '../../dist'

/*const draw = */ polydraw('#root', {
    elements: {
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
    },
})
