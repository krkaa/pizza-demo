import React from 'react'
import styles from '../Login/Login.module.sass'
import {reduxForm} from "redux-form"
import {createField, Input} from "./../../common/FormControls/FormControls"
import {required} from "../../Controls/Validators/Validators"

export default reduxForm({form: 'signing'})(({handleSubmit, onSignInWithGoogle}) => {
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {createField('', 'email', 'email', Input, [required], 'email', {}, 'Email')}
            {createField('', 'password', 'password', Input, [required], "passwordSignIn", {}, 'Password')}
            <button className="btn orange">Sign In</button>
            <p>Or Sign In With Google</p>
            <button className="btn orange" onClick={onSignInWithGoogle}>Sign In With Google</button>
        </form>
    )
});