import React from 'react'
import {reduxForm} from "redux-form";
import s from '../Cart.module.sass'
import {Col, Row} from "react-materialize";

const CartOrderForm = ({handleSubmit, cart, totalPrice, ref}) => {
    console.log('asd')
    return (
        <Row>
            <Col
                m={6}
                s={12}
            >
                <form onSubmit={handleSubmit}>
                    <h3 className={s.h3}>Ваш заказ:</h3>
                    {cart.cartItems.map(i => {
                        return (
                            <div key={i.id}>
                                <div>
                                    <h5 className={s.h5}>{i.name}</h5>
                                    <span>Количество: {i.quantity}</span>
                                </div>
                            </div>
                        )
                    })}
                    <div>
                        <h4>Всего: {cart.quantityItems}</h4>
                        <span>На сумму: {totalPrice} $</span>
                    </div>
                </form>
            </Col>
        </Row>
    )
}

export default reduxForm({form: 'order'})(CartOrderForm)