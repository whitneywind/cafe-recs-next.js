const TOGGLE_USER = "TOGGLE_USER";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const reducer = (state: any, action: any) => {
    const { type, payload } = action;

    if (type === TOGGLE_USER) {
        return {
            ...state,
            user: !state.user
        }
    }
    if (type === ADD_TO_FAVORITES) {
        console.log('add reducer')
        console.log('action: ', action)
        console.log('payload.favorites: ', payload)
        return {
            ...state,
            // favorites: payload.favorites
        }
    }
    throw new Error(`no case for this type ${type}`)
}