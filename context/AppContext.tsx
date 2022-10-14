import React, { FC, createContext, useContext, useReducer } from 'react'
import { reducer } from './reducers'
import { CafeInfo } from '../types'

type InitialStateType = {
    user: boolean;
    favorites: Array<string>;
    toggleUser?: any;
    addToFavorites?: any,
    removeFromFavorites?: any
}

const defaultState: InitialStateType = {
    user: false,
    favorites: ["placeholder"],
}

interface ProviderProps {
    children?: React.ReactNode;
}

const AppContext = createContext<InitialStateType>(defaultState);

const AppProvider: FC = (props: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    const toggleUser = () => {
        dispatch({ type: "TOGGLE_USER" });
    }

    const toggleFavorite = () => {
        dispatch({ type: "TOGGLE_FAVORITE" });
    }

    const addToFavorites = (cafe: CafeInfo) => {
        const updatedFavorites = state.favorites;
        updatedFavorites.push(cafe.name)
        dispatch({
            type: "ADD_TO_FAVORITES",
            payload: {
                favorites: updatedFavorites
            }
        });
    };

    const removeFromFavorites = (cafe: CafeInfo) => {
        dispatch({
            type: "REMOVE_FROM_FAVORITES",
            payload: cafe
        })
    }

    return (
        <AppContext.Provider value={{
            favorites: state.favorites,
            ...state,
            toggleUser,
            toggleFavorite,
            addToFavorites,
            removeFromFavorites, 
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { useAppContext, AppProvider };