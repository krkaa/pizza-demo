import React, {lazy, Suspense} from 'react';
import styles from './App.module.sass';
import {Route, Switch, withRouter} from "react-router-dom";
import Preloader from "./common/Preloader/Preloader";
import Header from "./Components/Header/Header";
import AuthProvider from "./Components/Auth/Auth";
import {connect} from "react-redux";
import {compose} from "redux";
import HomeContainer from "./Components/HomeContent/HomeContainer";

const MenuContent = lazy(() => import("./Components/Menu/MenuContent"))
const Login = lazy(() => import("./Components/Login/Login"))

const App = (props) => {

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

                        </Suspense>
                    </div>
                </div>
            </Switch>
        </AuthProvider>
    )
}

export default compose(
    withRouter,
    connect(null, null)
)(App);
