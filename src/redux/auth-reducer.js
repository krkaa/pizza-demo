const SET_CURRENT_USER = 'auth-reducer/SET_CURRENT_USER'
const IS_AUTH_USER = 'auth-reducer/IS_AUTH_USER'

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export const setCurrentUser = user => ({type: SET_CURRENT_USER, payload: user});

export default userReducer;