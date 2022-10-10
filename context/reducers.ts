import favorites from "../pages/user/favorites";

const TOGGLE_USER = "TOGGLE_USER";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"

export const reducer = (state: any, action: any) => {
    const { type, payload } = action;

    if (type === TOGGLE_USER) {
        return {
            ...state,
            user: !state.user
        }
    }
    if (type === ADD_TO_FAVORITES) {
        return {
            ...state,
            favorites: payload.favorites
        }
    }
    if (type === REMOVE_FROM_FAVORITES) {
        return {
            ...state,
            favorites: state.favorites.filter((fav: String) => fav !== payload.name)
        }
    }
    throw new Error(`no case for this type ${type}`)
}

// [...state.favorites, payload.name]