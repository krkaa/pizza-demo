import s from "../Menu/MenuHead.module.sass";
import cartIcon from "../../assets/images/cartIcon.png";
import {NavLink} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const MenuHead = ({quantityItems}) => {
    return <>
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
    </>
}

const mapStateToProps = (state) => ({
    quantityItems: state.cart.quantityItems
})

export default connect(mapStateToProps, null)(MenuHead)