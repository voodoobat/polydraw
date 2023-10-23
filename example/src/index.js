// import { polydraw } from 'polydraw'
import { polydraw } from '../../dist'

const draw = await polydraw('#image-2', '/public/img.jpg', {})

polydraw('#image-1', '/public/img.jpg', {
    maxPoints: 4,
    events: {
        onPolygonCreate: (polygon) => {
            // draw.placePolygon(polygon)
        },
        onPolygonChange: (polygon) => {
            // draw.placePolygon(polygon)
        },
        onSceneChange: (data) => {
            console.log(data)
        },
    },
})

polydraw('#image-3', '/public/img.jpg', {
    elements: {
        point: {
            size: 15,
            color: 'black',
            opacity: 1,
        },
        circuit: {
            size: 2,
            color: 'black',
            opacity: 0.25,
        },
        guide: {
            size: 3,
            color: 'black',
            opacity: 0.5,
        },
        polygon: {
            color: 'black',
            opacity: 0.15,
            point: {
                size: 15,
                color: 'black',
                opacity: 0.5,
            },
        },
        menu: {
            style: {
                fontSize: '1.2em',
                background: 'black',
            },
        },
    },
})
