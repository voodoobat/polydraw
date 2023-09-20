import { Polydraw } from '../types'

export const clearScene = (state: Polydraw) => {
    state.isDrawGuide = false
    state.points.forEach((point) => point.remove())
    state.points = []

    if (state.guide) {
        state.guide.remove()
        state.guide = null
    }

    if (state.circuit) {
        state.circuit.remove()
        state.circuit = null
    }
}
