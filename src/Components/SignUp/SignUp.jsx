import React, {useCallback} from 'react';
import styles from '../Login/Login.module.sass';
import SignUpReduxForm from "./SignUpReduxForm";
import {withRouter} from "react-router-dom";
import app from "../Firebase/Firebase";

const SignUp = ({history}) => {

    const onSubmit = useCallback(async formData => {
        const email = formData.email
        const password = formData.password
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email, password)
            history.push("/")
        } catch (e) {
            alert(e)
        }
    }, [history])

    return <div className={styles.signUp}>
        <h2 className={styles.h2}>I do not have an account</h2>
        <span className={styles.span}>Sign up with email and password</span>
        <SignUpReduxForm onSubmit={onSubmit}/>
    </div>
};


export default withRouter(SignUp);