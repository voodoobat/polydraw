// import { polydraw } from 'polydraw'
import { polydraw } from '../../dist'

const draw = polydraw('#image-1', '/public/img.jpg', {
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

polydraw('#image-2', '/public/img.jpg', {
    events: {
        onPolygonCreate: () => {
            console.log('create')
        },
    },
})
