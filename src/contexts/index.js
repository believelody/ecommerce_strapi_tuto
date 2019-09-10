import React, { useContext, createContext } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{

        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppHooks = () => useContext(AppContext)