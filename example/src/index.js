// import { polydraw } from 'polydraw'
import { polydraw } from '../../dist'

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
