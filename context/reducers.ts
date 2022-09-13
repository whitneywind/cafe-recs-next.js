const TOGGLE_USER = "TOGGLE_USER";

export const reducer = (state: any, action: any) => {
    if (action.type === TOGGLE_USER) {
        return {
            ...state,
            user: !state.user
        }
    }
}