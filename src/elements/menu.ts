import { MenuConfig } from '../types'
import { Point } from '@svgdotjs/svg.js'

export const menu = (
    root: HTMLElement,
    cords: Point,
    config: MenuConfig,
    onClick: () => void,
) => {
    const element = document.createElement('div')
    element.innerText = 'Удалить'

    Object.keys(config.style).forEach((key) => {
        // @ts-ignore
        element.style[key] = config.style[key]
    })

    root.appendChild(element)

    element.style.position = 'absolute'
    element.style.top = `${cords.y}px`
    element.style.left = `${cords.x}px`

    element.addEventListener('click', onClick)

    const remove = () => {
        element.remove()
    }

    return {
        remove,
    }
}
