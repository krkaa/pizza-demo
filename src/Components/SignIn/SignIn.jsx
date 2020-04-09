import React, {useCallback, useContext} from 'react';
import styles from '../Login/Login.module.sass';
import SignInReduxForm from "./SignInReduxForm";
import {Redirect, withRouter} from "react-router-dom";
import app from "../Firebase/Firebase";
import {AuthContext} from "../Auth/Auth";
import * as firebase from "firebase";
import {compose} from "redux";

const SignIn = ({history}) => {

    const {currentUser} = useContext(AuthContext)

    const onSubmit = useCallback(
        async formData => {
            const email = formData.email
            const password = formData.password
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                history.push("/")
            } catch (e) {
                alert(e)
            }
        },
        [history]
    )

    const onSignInWithGoogle = useCallback(async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        try {
            await app
                .auth()
                .signInWithPopup(provider)
            history.push("/")
        } catch (e) {
            alert(e)
        }
    }, [history])

    if (currentUser) {
        return <Redirect to={"/"}/>
    }

    return <div className={styles.signIn}>
        <h3 className={styles.h3}>I already have an account</h3>
        <span className={styles.span}>Sign in with your email and password</span>
        <SignInReduxForm onSubmit={onSubmit} onSignInWithGoogle={onSignInWithGoogle}/>
    </div>
};


export default compose(withRouter)(SignIn);