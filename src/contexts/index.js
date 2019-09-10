import React, { useContext, createContext, useReducer } from 'react'
import { loadingReducer, initLoadingState } from '../reducers/loadingReducer'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{
            useLoading: useReducer(loadingReducer, initLoadingState)
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppHooks = () => useContext(AppContext)