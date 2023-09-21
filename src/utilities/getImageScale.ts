export const getImageScale = (image: HTMLImageElement, root: HTMLElement) => {
    return image.naturalWidth / root.clientWidth
}
