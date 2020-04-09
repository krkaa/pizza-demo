import React from 'react'
import styles from '../Login/Login.module.sass'
import {reduxForm} from "redux-form"
import {createField, Input} from "./../../common/FormControls/FormControls"
import {maxLengthCreator, required} from "../../Controls/Validators/Validators"

const maxLength15 = maxLengthCreator(15);

export default reduxForm({form: 'signup'})(({handleSubmit}) => {
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {createField('', 'email', 'email', Input, [required], 'email', {}, 'Email')}
            {createField('','text', 'fullName', Input, [required, maxLength15], 'fullName', {}, 'Full Name')}
            {createField('','password', 'password', Input, [required], 'passwordSignUp', {}, 'Password')}
            <div className={styles.loginBtn}>
                <button className='btn orange'>Sign Up</button>
            </div>
        </form>
    )
});