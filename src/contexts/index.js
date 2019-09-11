import React, { useContext, createContext, useReducer } from 'react'
import { loadingReducer, initLoadingState } from '../reducers/loadingReducer'
import { cartReducer, initCartState } from '../reducers/cartReducer'
import { authReducer, initAuthState } from '../reducers/authReducer'
import { toastReducer, initToastState } from '../reducers/toastReducer'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{
            useLoading: useReducer(loadingReducer, initLoadingState),
            useCart: useReducer(cartReducer, initCartState),
            useAuth: useReducer(authReducer, initAuthState),
            useToast: useReducer(toastReducer, initToastState)
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppHooks = () => useContext(AppContext)