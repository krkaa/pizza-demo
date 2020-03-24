import React from 'react'
import styles from '../Login/Login.module.sass'
import {reduxForm} from "redux-form"
import {createField, Input} from "./../../common/FormControls/FormControls"
import {required} from "../../Controls/Validators/Validators"

export default reduxForm({form: 'signup'})(({handleSubmit}) => {
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {createField('Email...', 'email', 'email', Input, [required], styles.input)}
            {createField('Password','password', 'password', Input, [required], styles.input)}
            <div className={styles.loginBtn}>
                <button>Sign Up</button>
            </div>
        </form>
    )
});