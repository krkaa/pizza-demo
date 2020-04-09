import React, {useCallback} from 'react';
import styles from '../Login/Login.module.sass';
import SignUpReduxForm from "./SignUpReduxForm";
import {withRouter} from "react-router-dom";
import app from "../Firebase/Firebase";

const SignUp = ({history}) => {

    const onSubmit = useCallback(async formData => {
        const email = formData.email
        const password = formData.password
        const fullName = formData.fullName
        try {
            (await app
                .auth()
                .createUserWithEmailAndPassword(email, password))
                .user.updateProfile({
                displayName: fullName
            })
            history.push("/")
        } catch (e) {
            alert(e)
        }
    }, [history])

    return <div className={styles.signUp}>
        <h3 className={styles.h3}>I do not have an account</h3>
        <span className={styles.span}>Sign up with email and password</span>
        <SignUpReduxForm onSubmit={onSubmit}/>
    </div>
};


export default withRouter(SignUp);