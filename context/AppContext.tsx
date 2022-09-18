import React, { createContext, useContext, useReducer } from 'react'
import { reducer } from './reducers'

type InitialStateType = {
    user: boolean;
    favorites: Array<string> | any;
    toggleUser?: any;
    addToFavorites?: any
}

const defaultState: InitialStateType = {
    user: false,
    favorites: [],
}

interface ProviderProps {
    children?: React.ReactNode;
}

const AppContext = createContext(defaultState);

const AppProvider: React.FC = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    const toggleUser = () => {
        dispatch({ type: "TOGGLE_USER" });
    }

    const toggleFavorite = () => {
        dispatch({ type: "TOGGLE_FAVORITE" });
    }

    const addToFavorites = (cafe: String) => {
        const updatedFavorites = state.favorites.push(cafe);
        dispatch({
            type: "ADD_TO_FAVORITES",
            payload: {
                favorites: updatedFavorites
            }
        });
    };

    return (
        <AppContext.Provider value={{
            favorites: state.favorites,
            ...state,
            toggleUser,
            toggleFavorite,
            addToFavorites 
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { useAppContext, AppProvider };