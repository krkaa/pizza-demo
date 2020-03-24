import React from 'react'
import styles from '../Login/Login.module.sass'
import {reduxForm} from "redux-form"
import {createField, Input} from "./../../common/FormControls/FormControls"
import {required} from "../../Controls/Validators/Validators"

export default reduxForm({form: 'signing'})(({handleSubmit, onSignInWithGoogle}) => {
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {createField('Enter email...', 'email', 'email', Input, [required], styles.input)}
            {createField('Enter password...', 'password', 'password', Input, [required], styles.input)}
            <button>Sign In</button>
            <p>Or Sign In With Google</p>
            <button onClick={onSignInWithGoogle}>Sign In With Google</button>
        </form>
    )
});