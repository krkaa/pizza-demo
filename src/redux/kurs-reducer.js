import {kursAPI} from "../api/api";

const USER_DATA = 'kurs-reducer/USER_DATA'

let initialState = {
    kursData: []
}

let kursReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            return {
                ...state,
                kursData: action.data
            }
        default:
            return state;
    }
}

export const setKursData = (data) => ({type: USER_DATA, data})

export const getKursData = () => async (dispatch) => {
    let data = await kursAPI.getKursData();
    dispatch(setKursData(data))
};

export default kursReducer;