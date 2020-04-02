import React from 'react';
import styles from './Header.module.sass'
import logo from '../../assets/images/logo.png'
import NavBar from "./NavBar/NavBar";

const Header = () => {
    return <div>
        <div className={styles.header}>
            <div className={styles.logo}><img src={logo} alt="Logo"/></div>
            <NavBar/>
        </div>
    </div>
}

export default Header;