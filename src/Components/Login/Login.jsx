import React from 'react'
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import styles from "./Login.module.sass"
import backgroundImg from "../../assets/images/background-image.jpg"

const style = {
    background: `url(${backgroundImg}) 100% 100% no-repeat`,
    backgroundSize: "cover",
    borderRadius: "5px"
}

const Login = (props) => {
    return (
        <div className={styles.loginPage} style={style}>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Login