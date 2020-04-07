import React, {lazy, Suspense, useContext, useEffect} from 'react';
import styles from './App.module.sass';
import {Route, Switch, withRouter} from "react-router-dom";
import Preloader from "./common/Preloader/Preloader";
import Header from "./Components/Header/Header";
import {AuthContext} from "./Components/Auth/Auth";
import {connect} from "react-redux";
import {compose} from "redux";
import HomeContainer from "./Components/HomeContent/HomeContainer";
import {setLocalCart} from "./redux/cart-reducer";

const MenuContent = lazy(() => import("./Components/Menu/MenuContent"))
const Login = lazy(() => import("./Components/Login/Login"))
const Cart = lazy(() => import("./Components/Cart/Cart"))


const App = ({cart, setLocalCart, localCart}) => {

    const {currentUser} = useContext(AuthContext)

    useEffect(() => {

        if (localCart.cartItems.length > 0) {
            setLocalCart(localCart)
        }

    }, [setLocalCart, localCart])

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
    cart: state.cart,
    isAuth: state.auth.isAuth
})

export default compose(
    withRouter,
    connect(mapStateToProps, {setLocalCart})
)(App);
