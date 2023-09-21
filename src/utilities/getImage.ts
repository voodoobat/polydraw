export const getImage = (url: string) => {
    return new Promise((resolve) => {
        const image = new Image()

        image.src = url
        image.addEventListener('load', () => {
            resolve(image)
        })
    })
}
