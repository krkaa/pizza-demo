const SET_CURRENT_USER = 'auth-reducer/SET_CURRENT_USER'
const SET_IS_AUTH = 'auth-reducer/SET_IS_AUTH'

const INITIAL_STATE = {
    currentUser: null,
    isAuth: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state
    }
}

export const setCurrentUser = user => ({type: SET_CURRENT_USER, payload: user});
export const setIsAuth = booleanKey => ({type: SET_IS_AUTH, payload: booleanKey});

export default userReducer;