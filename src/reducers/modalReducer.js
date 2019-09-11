export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const initModalState = {
    msg: null,
    title: null,
    isOpened: false
}

export const modalReducer = (state, { type, payload }) => {
    switch (type) {
        case OPEN_MODAL:
            return {
                ...state,
                msg: payload.msg,
                isOpened: true
            }

        case CLOSE_MODAL:
            return {
                ...state,
                msg: null,
                isOpened: false
            }

        default:
            return state
    }
}