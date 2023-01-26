import React, { FC, createContext, useContext, useState, useReducer } from 'react'
import { reducer } from './reducers'
import { CafeInfo } from '../types'

type InitialStateType = {
    user: boolean;
    favorites: any;
    toggleUser?: any;
    addToFavorites?: any,
    removeFromFavorites?: any
}

const defaultState: InitialStateType = {
    user: false,
    favorites: [],
}

// interface ProviderProps {
//     children?: React.ReactNode;
// }

export const AppContext = createContext<InitialStateType>({
    user: false,
    favorites: [],
});

export const AppProvider: FC = (props: any) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    const toggleUser = () => { dispatch({ type: "TOGGLE_USER" }) }
    const toggleFavorite = () => { dispatch({ type: "TOGGLE_FAVORITE" }) }
    const addToFavorites = (cafe: CafeInfo) => {
        const updatedFavorites = state.favorites;
        updatedFavorites.push(cafe)
        dispatch({
            type: "ADD_TO_FAVORITES",
            payload: {
                favorites: updatedFavorites
            }
        });
    };
    const removeFromFavorites = (cafe: CafeInfo) => {
        const filteredFavorites = state.favorites.filter((item: CafeInfo) => item.name !== cafe.name);
        dispatch({
            type: "REMOVE_FROM_FAVORITES",
            payload: {
                favorites: filteredFavorites
            }
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

export const useAppContext = () => {
    return useContext(AppContext);
}