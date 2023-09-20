// import { polydraw } from 'polydraw'
import { polydraw } from '../../dist'

const draw = polydraw('#root', {
    elements: {
        point: {
            size: 10,
            color: 'orange',
        },
        polygon: {
            point: {
                size: 10,
                color: 'green',
            },
        },
    },
    events: {
        onPolygonCreate: (polygon) => {
            console.log('CREATE', polygon, draw)
        },
        onPolygonChange: (polygon) => {
            console.log('CHANGE', polygon, draw)
        },
    },
})
