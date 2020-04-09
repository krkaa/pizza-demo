import React from 'react';
import styles from "./HomeContent.module.sass"
import backgroundImg from "../../assets/images/home-image.jpg";
import {createField, Input} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";

const style = {
    background: `url(${backgroundImg}) 100% 100% no-repeat`,
    backgroundSize: "cover",
    borderRadius: "5px"
}


const HomeContent = ({handleSubmit}) => {
    return (
        <div>
            <div className={styles.homePage} style={style}>
                <div className={styles.shadowForm}>
                        <h1 className={styles.h1}><span className={styles.span}>Pizza shop</span> - it's Very tasty</h1>
                        <form onSubmit={handleSubmit}>
                            {createField('Type your adress...', 'text', 'orderAdress', Input, [], styles.orderInput)}
                            <button className="btn orange" type="submit">Order</button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default reduxForm({form: 'order'})(HomeContent)