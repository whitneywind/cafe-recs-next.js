import React, { createContext, useContext, useReducer } from 'react'
import { reducer } from './reducers'

type DefaultStateType = {
    user: boolean;
    favorites: String[] | null[];
    toggleUser?: any;
}

const defaultState = {
    user: false,
    favorites: []
}

interface ProviderProps {
    children?: React.ReactNode;
}

const AppContext = createContext<DefaultStateType>(defaultState);

const AppProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    const toggleUser = () => {
        dispatch({ type: "TOGGLE_USER" });
    }


    return (
        <AppContext.Provider value={{
            ...state,
            toggleUser 
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { useAppContext, AppProvider };