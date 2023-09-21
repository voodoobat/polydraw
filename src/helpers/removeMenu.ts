import { Polydraw } from '../types'

export const removeMenu = (state: Polydraw) => {
    state.menu?.remove()
    state.menu = null
}
