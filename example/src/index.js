import { polydraw } from 'polydraw'

const draw = await polydraw('#image-2', '/public/img.jpg', {})
polydraw('#image-1', '/public/img.jpg', {
    events: {
        onPolygonCreate: (polygon) => {
            console.log('CREATE', polygon)
            draw.placePolygon(polygon)
        },
        onPolygonChange: (polygon) => {
            console.log('CHANGE', polygon)
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
