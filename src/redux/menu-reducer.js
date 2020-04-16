import db from "../data-clean/data"

const SET_USER_ADRESS = 'menu-reducer/SET_USER_ADRESS'
const SET_MENU_DATA = 'menu-reducer/SET_MENU_DATA'

let INITIAL_STATE = {
    userAdress: null,
    menuData: []
}

const menuReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {

        case SET_USER_ADRESS:
            return {
                ...state,
                userAdress: action.payload
            }
        case SET_MENU_DATA:
            return {
                ...state,
                menuData: action.payload
            }
        default:
            return state
    }
}

export const setUserAddress = (adress) => ({ type: SET_USER_ADRESS, payload: adress })
const setMenuData = (menu) => ({ type: SET_MENU_DATA, payload: menu})

export const requestMenu = () => async (dispatch) => {
    let data = db
    dispatch(setMenuData(data))
}

export default menuReducer