import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import authReducer from "./auth-reducer"
import menuReducer from "./menu-reducer"
import cartReducer from "./cart-reducer"
import {loadState, saveState} from "../localStorage";

let reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    menu: menuReducer,
    cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
window.__store__ = store

loadState('localCart')
store.subscribe(() => saveState("localCart", store.getState()["cart"]));

export default store