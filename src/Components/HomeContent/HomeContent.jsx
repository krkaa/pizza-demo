import React from 'react';
import styles from "./HomeContent.module.sass"
import backgroundImg from "../../assets/images/home-image.jpg";
import {createField, Input} from "../../common/FormControls/FormControls";
import {reduxForm, submit} from "redux-form";
import {required} from "../../Controls/Validators/Validators";

const style = {
    background: `url(${backgroundImg}) 100% 100% no-repeat`,
    backgroundSize: "cover",
    borderRadius: "5px"
}


const HomeContent = ({handleSubmit}) => {
    return <div className={styles.homePage} style={style}>
            <div className={styles.desciption}>
                <h1 className={styles.h1}><span className={styles.span}>Pizza shop</span> - it's Very tasty</h1>
            </div>
            <div className={styles.orderArea}>
                <form onSubmit={handleSubmit}>
                    {createField('Type your adress...', 'text', 'orderAdress', Input, [], styles.orderInput)}
                    <button className={styles.button} type="submit">Order</button>
                </form>
            </div>
        </div>
}

export default reduxForm({form: 'order'})(HomeContent)