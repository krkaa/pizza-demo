const SET_USER_ADRESS = 'menu-reducer/SET_USER_ADRESS'

const INITIAL_STATE = {
    userAdress: null
}

const menuReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {

        case SET_USER_ADRESS:
            return {
                ...state,
                userAdress: action.payload
            }
        default:
            return state
    }
}

export const setUserAdress = (adress) => ({ type: SET_USER_ADRESS, payload: adress })

export default menuReducer