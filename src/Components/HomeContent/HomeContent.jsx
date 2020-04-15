import React from 'react';
import styles from "./HomeContent.module.sass"
import backgroundImg from "../../assets/images/home-image.jpg";
import {createField, Input} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import {Carousel} from "antd";

const style = {
    background: `url(${backgroundImg}) 100% 100% no-repeat`,
    backgroundSize: "cover"
}


const HomeContent = ({handleSubmit}) => {
    return <>
        <Carousel autoplay className={styles.carousel}>
            <div style={style}>
                <h3>В стадии разработки</h3>
            </div>
            <div>
                <h3>В стадии разработки</h3>
            </div>
            <div>
                <h3>В стадии разработки</h3>
            </div>
            <div>
                <h3>В стадии разработки</h3>
            </div>
        </Carousel>
        <div>
            <div className={styles.homePage} style={style}>
                <form onSubmit={handleSubmit}>
                    {createField('Type your adress...', 'text', 'orderAdress', Input, [], 'orderAddress', {}, '')}
                    <button className="btn orange" type="submit">Order</button>
                </form>
            </div>
        </div>
    </>
}

export default reduxForm({form: 'home'})(HomeContent)