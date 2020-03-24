import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import authReducer from "./auth-reducer"
import menuReducer from "./menu-reducer";

let reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    menu: menuReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;