import React, {useContext} from 'react';
import styles from './Header.module.sass'
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import app from "../Firebase/Firebase";
import {AuthContext} from "../Auth/Auth";
import {Badge, Icon, Navbar} from "react-materialize";
import {connect} from "react-redux";

const Header = ({quantityItems}) => {

    const {currentUser} = useContext(AuthContext)

    return <div>
        <Navbar
            alignLinks="right"
            brand={<NavLink to="/" className={styles.logo}><img src={logo} alt="Logo"/></NavLink>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            className={`deep-orange`}
                options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <NavLink to="/cart" className={`sidenav-close ${styles.badge}`}>
                Cart
                <Badge caption="goods">
                    {quantityItems}
                </Badge>
            </NavLink>
            <NavLink to="/" className={'sidenav-close'}>
                Home
            </NavLink>
            <NavLink to="/menu" className={'sidenav-close'}>
                Menu
            </NavLink>
            {!currentUser
                ? <NavLink to="/login" className={'sidenav-close'}>Login</NavLink>
                : <button className={`btn blue ${styles.button}`} onClick={() => {
                    app.auth().signOut()
                }}>Sign Out</button>
            }
        </Navbar>
    </div>
}

const mapStateToProps = (state) => ({
    quantityItems: state.cart.quantityItems
})

export default connect(mapStateToProps, null)(Header)