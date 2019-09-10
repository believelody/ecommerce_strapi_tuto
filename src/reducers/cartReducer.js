export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const RESET_CART = 'RESET_CART'

export const initCartState = {
    cart: [],
    total: 0
}

export const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [payload, state.cart]
            }
        
        case RESET_CART:
            return {
                cart: []
            }

        case REMOVE_FROM_CART:
            return {
                cart: state.cart.filter(item => item.name !== payload)
            }

        case UPDATE_ITEM:
            let item = state.cart.find(item => item.name === payload.name)
            item['quantity'] = payload.quantity

            return {
                ...state
            }

        default:
            return state
    }
}