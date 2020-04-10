import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import AuthProvider from "./Components/Auth/Auth";
import 'antd/dist/antd.css';

let localCart = {}
if (localStorage.getItem('localCart')) {
    localCart = JSON.parse(localStorage.getItem('localCart'))
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AuthProvider>
                <App localCart={localCart}/>
            </AuthProvider>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
