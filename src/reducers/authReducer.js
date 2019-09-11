export const SUCCESS_AUTH = 'SUCCESS_AUTH'
export const ERROR_AUTH = 'ERROR_AUTH'
export const LOG_OUT = 'LOG_OUT'

export const initAuthState = {
    user: null,
    isConnected: false,
    errors: null
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
                errors: payload,
                isConnected: false
            }

        case LOG_OUT:
            return initAuthState

        default:
            return state
    }
}