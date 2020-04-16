import React, {Fragment} from 'react'
import {reduxForm} from "redux-form"
import { useHistory } from "react-router-dom"
import {Descriptions} from "antd"
import {Button} from "react-materialize"

const CartOrderForm = ({handleSubmit, cart, totalPrice, userAddress}) => {

    const history = useHistory()

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
                    const configArr = [...item.config]
                    let lastIndex = configArr.length - 1
                    return <Fragment key={item.id}>
                        <Descriptions.Item label="Product"><b>{item.name}</b></Descriptions.Item>
                        <Descriptions.Item label="Quantity"><b>{item.quantity}</b></Descriptions.Item>
                        <Descriptions.Item label="Amount"><b>{`$${total}`}</b></Descriptions.Item>
                        <Descriptions.Item label="Config Info">
                            {
                                configArr.map((item, idx) => lastIndex === idx
                                    ? <b key={idx}>{item}</b>
                                    : <b key={idx}>{item} | </b>
                                )
                            }
                        </Descriptions.Item>
                        <td />
                        <td />
                    </Fragment>
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
        <Button className={"btn orange"} onClick={() => history.push('/cart/success')}>Pay</Button>
    </>
}

export default reduxForm({form: 'order'})(CartOrderForm)