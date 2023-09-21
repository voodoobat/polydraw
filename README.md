# Polydraw

## Установка
```bash
npm install github:voodoobat/polydraw#package
```

## Использование
```javascript
import { polydraw } from 'polydraw'

const draw = await polydraw('#root', 'http://example.com/image.jpg', {
  // вид элементов
  // https://github.com/voodoobat/polydraw/blob/package/src/constants/index.ts#L3  
  elements: {
    point: {
      size: 10,
      color: 'yellow',
      opacity: 0.2
    }
  },
  // события:
  // onPolygonCreate, onPolygonChange, onSceneChange
  events: {
    onPolygonCreate(polygon) {
      console.log(polygon)
    }
  }
})
```

## Возвращаемые значения
### onPolygonChange и onPolygonCreate
```javascript
{
  "points": [
    {
      "x": 4714.679300291546,
      "y": 572.2089407191448
    },
    {
      "x": 3054.467444120505,
      "y": 644.7424684159378
    },
    {
      "x": 3973.225461613217,
      "y": 959.0544217687075
    },
    {
      "x": 5730.148688046647,
      "y": 1845.5753158406221
    }
  ]
}
```

### onSceneChange
```javascript
{
  "url": "http://localhost:5000/public/img.jpg",
  "polygon": [
    {
      "points": [
        {
          "x": 3317.2,
          "y": 1733.990909090909
        },
        {
          "x": 3178.983333333333,
          "y": 4071.109090909091
        },
        {
          "x": 5842.795454545454,
          "y": 4209.325757575757
        },
        {
          "x": 6848.007575757575,
          "y": 2437.639393939394
        }
      ]
    },
    {
      "points": [
        {
          "x": 6533.878787878788,
          "y": 527.7363636363636
        },
        {
          "x": 5955.881818181818,
          "y": 1155.9939393939394
        },
        {
          "x": 6885.70303030303,
          "y": 1809.381818181818
        }
      ]
    }
  ]
}

```
