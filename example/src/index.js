// import { polydraw } from 'polydraw'
import { polydraw } from '../../dist'

const draw = await polydraw('#image-1', '/public/img.jpg', {
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

const draw2 = await polydraw('#image-2', '/public/img.jpg', {})

document.getElementById('copy').addEventListener('click', () => {
    draw2.data.polygon.forEach((polygon) => {
        draw.placePolygon(polygon)
    })
})
