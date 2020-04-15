import React, {lazy, Suspense, useEffect} from 'react'
import styles from './App.module.sass'
import {Route, Switch, withRouter} from "react-router-dom"
import Header from "./Components/Header/Header"
import {connect} from "react-redux"
import {compose} from "redux"
import HomeContainer from "./Components/HomeContent/HomeContainer"
import {setLocalCart} from "./redux/cart-reducer"
import 'materialize-css';
import {Col, Preloader, Row} from "react-materialize";
import FooterContent from "./Components/Footer/Footer";

const MenuContent = lazy(() => import("./Components/Menu/MenuContent"))
const Login = lazy(() => import("./Components/Login/Login"))
const Cart = lazy(() => import("./Components/Cart/Cart"))


const App = ({setLocalCart, localCart}) => {

    useEffect(() => {

        if (localCart) {
            setLocalCart(localCart)
        }

    }, [setLocalCart, localCart])


    return <Switch>
        <div className={styles.appWrapper}>
            <Header/>
            <div>
                <Route
                    exact path='/'
                    component={HomeContainer}
                />
                <Route
                    exact path='/pizza-demo'
                    component={HomeContainer}
                />
                <Suspense fallback={
                    <Row>
                        <Col s={4}>
                            <Preloader
                                className={styles.preloader}
                                active
                                color="yellow"
                                flashing
                            />
                        </Col>
                    </Row>
                }>

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
                    <FooterContent/>
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
