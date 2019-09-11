export const SUCCESS_AUTH = 'SUCCESS_AUTH'
export const ERROR_AUTH = 'ERROR_AUTH'

export const initAuthState = {
    user: null,
    isConnected: false
}

export const authReducer = (state, { type, payload }) => {
    switch (type) {
        case SUCCESS_AUTH:
            return {
                ...state,
                user: payload,
                isConnected: true
            }

        case ERROR_AUTH:
            return {
                ...state,
                user: null,
                isConnected: false
            }

        default:
            return state
    }
}