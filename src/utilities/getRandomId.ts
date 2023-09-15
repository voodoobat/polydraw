export const getRandomId = (size = 6) => {
    return `_${Math.random()
        .toString(36)
        .substring(2, size + 2)}`
}
