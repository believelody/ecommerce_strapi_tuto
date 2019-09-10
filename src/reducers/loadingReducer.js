export const SET_LOADING = 'SET_LOADING'
export const RESET_LOADING = 'RESET_LOADING'

export const initLoadingState = {
    loading: false
}

export const loadingReducer = (state, {type, payload}) => {
    switch(type) {
        case SET_LOADING:
            return {
                loading: true
            }
                
        case RESET_LOADING:
            return {
                loading: false
            }

        default:
            return state
    }
}