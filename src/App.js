import React, {lazy, Suspense, useContext, useEffect} from 'react';
import styles from './App.module.sass';
import {Route, Switch, withRouter} from "react-router-dom";
import Preloader from "./common/Preloader/Preloader";
import Header from "./Components/Header/Header";
import {AuthContext} from "./Components/Auth/Auth";
import {connect} from "react-redux";
import {compose} from "redux";
import HomeContainer from "./Components/HomeContent/HomeContainer";
import {requestMenu} from "./redux/menu-reducer";
import {setUserCart} from "./redux/cart-reducer";

const MenuContent = lazy(() => import("./Components/Menu/MenuContent"))
const Login = lazy(() => import("./Components/Login/Login"))
const Cart = lazy(() => import("./Components/Cart/Cart"))


const App = ({requestMenu, cart, setUserCart}) => {

    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        requestMenu()
        if (currentUser != null && cart != null) {
            setUserCart(cart, currentUser.uid)
        }
    }, [requestMenu, currentUser, cart, setUserCart])

    return <Switch>
        <div className={styles.appWrapper}>
            <Header/>
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
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default compose(
    withRouter,
    connect(mapStateToProps, {requestMenu, setUserCart})
)(App);
