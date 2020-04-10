import React from 'react'
import {reduxForm} from "redux-form";
import s from '../Cart.module.sass'
import {Descriptions} from "antd";

const CartOrderForm = ({handleSubmit, cart, totalPrice}) => {
    console.log(cart)
    return <>
        <Descriptions bordered title="Products" size="small">
        {
            cart.cartItems.map(item => {
            return <>
                <Descriptions.Item label="Product">{item.name}</Descriptions.Item>
                <Descriptions.Item label="Amount">{`$${item.price}`}</Descriptions.Item>
                <Descriptions.Item label="Config Info">
                    meat,
                    <br/>
                    salt,
                    <br/>
                    cheese<br/>
                </Descriptions.Item>
           </>
        })
        }
        </Descriptions>
        <br/>
        <br/>
        <Descriptions title="Custom Size" size="middle">
            <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
            <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
            <Descriptions.Item label="time">18:00:00</Descriptions.Item>
            <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
            <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
            <Descriptions.Item label="Official">$60.00</Descriptions.Item>
        </Descriptions>
    </>
}

export default reduxForm({form: 'order'})(CartOrderForm)