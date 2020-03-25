import React, {lazy, Suspense, useEffect} from 'react';
import styles from './App.module.sass';
import {Route, Switch, withRouter} from "react-router-dom";
import Preloader from "./common/Preloader/Preloader";
import Header from "./Components/Header/Header";
import AuthProvider from "./Components/Auth/Auth";
import {connect} from "react-redux";
import {compose} from "redux";
import HomeContainer from "./Components/HomeContent/HomeContainer";
import {requestMenu} from "./redux/menu-reducer";

const MenuContent = lazy(() => import("./Components/Menu/MenuContent"))
const Login = lazy(() => import("./Components/Login/Login"))
const Cart = lazy(() => import("./Components/Cart/Cart"))

const App = ({requestMenu}) => {

    useEffect(() => {
        requestMenu()
    }, [])

    return (
        <AuthProvider>
            <Switch>
                <div className={styles.appWrapper}>
                    <Header />
                    <div className={styles.appWrapperContent}>
                        <Route
                            exact path='/'
                            component={HomeContainer}
                        />
                        <Suspense fallback={<Preloader/>}>

                            <Route
                                exact path='/menu'
                                render={() => <MenuContent/>}
                            />
                            <Route
                                exact path='/login'
                                render={() => <Login/>}
                            />
                            <Route
                                exact path='/cart'
                                render={() => <Cart/>}
                            />

                        </Suspense>
                    </div>
                </div>
            </Switch>
        </AuthProvider>
    )
}

export default compose(
    withRouter,
    connect(null, {requestMenu})
)(App);
