// import { polydraw } from 'polydraw'
import { polydraw } from '../../dist'

polydraw('#root', '/public/img.jpg', {
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
        // onPolygonCreate: (polygon) => {
        //     console.log('CREATE', polygon, draw)
        // },
        // onPolygonChange: (polygon) => {
        //     console.log('CHANGE', polygon, draw)
        // },
    },
})
