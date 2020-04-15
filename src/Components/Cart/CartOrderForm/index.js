import React from 'react'
import {reduxForm} from "redux-form";
import s from '../Cart.module.sass'
import {Descriptions} from "antd";

const CartOrderForm = ({handleSubmit, cart, totalPrice, userAddress}) => {

    let date = new Date()
    let format = (count) => {
        if (count < 10) {
            return `0${count}`
        }
        else {
            return count
        }
    }
    let formatTime = () => `${format(date.getHours())}:${format(date.getMinutes())}:${format(date.getSeconds())}`

    let discount = Math.round(totalPrice * 20 / 100)
    let official = totalPrice - discount

    return <>
        <Descriptions bordered title="Products" size="small">
            {
                cart.cartItems.map(item => {
                    let total = item.price * item.quantity
                    return <>
                        <Descriptions.Item label="Product">{item.name}</Descriptions.Item>
                        <Descriptions.Item label="Quantity">{item.quantity}</Descriptions.Item>
                        <Descriptions.Item label="Amount">{`$${total}`}</Descriptions.Item>
                        <Descriptions.Item label="Config Info">
                            meat,
                            salt,
                            cheese
                        </Descriptions.Item>
                        <td />
                        <td />
                    </>
                })
            }
        </Descriptions>
        <br/>
        <br/>
        <Descriptions title="Order" size="middle">
            <Descriptions.Item label="Quantity">{cart.quantityItems}</Descriptions.Item>
            <Descriptions.Item label="Address">{userAddress}</Descriptions.Item>
            <Descriptions.Item label="time">{formatTime()}</Descriptions.Item>
            <Descriptions.Item label="Total price">${totalPrice}.00</Descriptions.Item>
            <Descriptions.Item label="Discount">${discount}.00</Descriptions.Item>
            <Descriptions.Item label="Official">${official}.00</Descriptions.Item>
        </Descriptions>
    </>
}

export default reduxForm({form: 'order'})(CartOrderForm)