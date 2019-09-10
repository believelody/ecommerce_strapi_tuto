import React, { useContext, createContext, useReducer } from 'react'
import { loadingReducer, initLoadingState } from '../reducers/loadingReducer'
import { cartReducer, initCartState } from '../reducers/cartReducer'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{
            useLoading: useReducer(loadingReducer, initLoadingState),
            useCart: useReducer(cartReducer, initCartState),
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppHooks = () => useContext(AppContext)