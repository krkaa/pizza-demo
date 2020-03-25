import React from 'react';
import cartIcon from "../../assets/images/cartIcon.png"
import s from './MenuHead.module.sass'
import {NavLink} from "react-router-dom";

const MenuHead = ({email, currentUser, quantityItems}) => {

    return <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    {
                        currentUser
                            ? <p><b>{`Вы авторизованы как ${email}`}</b></p>
                            : <p><b>{`Здарвствуйте, ${email}!`}</b></p>
                    }
                </div>
                <div className="col-6">
                    <NavLink to="/cart" className={s.wrapperCursor}>
                        <div className={s.wrapper}>
                            <div className={s.icon}>
                                <div className={s.null}>
                                    <span>{quantityItems}</span>
                                </div>
                                <img src={cartIcon} alt="cart"/>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
}

export default MenuHead