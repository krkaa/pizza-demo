import React, {Fragment} from 'react';
import styles from "./HomeContent.module.sass"
import backgroundImg from "../../assets/images/home-image.jpg";
import sliderImg3 from "../../assets/images/carousel-HomePage/1.jpg"
import sliderImg2 from "../../assets/images/carousel-HomePage/2.jpg"
import sliderImg1 from "../../assets/images/carousel-HomePage/3.jpg"
import sliderImg4 from "../../assets/images/carousel-HomePage/4.jpg"
import {createField, Input} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import {Carousel} from "antd";

const style = {
    background: `url(${backgroundImg}) 100% no-repeat`,
    backgroundSize: "cover"
}


const HomeContent = ({handleSubmit}) => {
    return <Fragment>
        <Carousel autoplay className={styles.carousel}>
            <div className={styles.bannerBlock}>
                <img src={sliderImg1} alt="sliderImg1"/>
            </div>
            <div className={styles.bannerBlock}>
                <img src={sliderImg2} alt="sliderImg2"/>
            </div>
            <div className={styles.bannerBlock}>
                <img src={sliderImg3} alt="sliderImg3"/>
            </div>
            <div className={styles.bannerBlock}>
                <img src={sliderImg4} alt="sliderImg4"/>
            </div>
        </Carousel>
        <div className={styles.sectionOrder} style={style}>
            <div className={styles.formBlock}>
                <form onSubmit={handleSubmit}>
                    {createField('', 'text', 'orderAdress', Input, [], 'orderAddress', {}, 'Type your adress...')}
                    <button className="btn red" type="submit">Order</button>
                </form>
            </div>
        </div>
    </Fragment>
}

export default reduxForm({form: 'home'})(HomeContent)