import React from 'react'
import {connect} from 'react-redux'
import {clearItem, removeItem, addItem} from '../../../redux/cart-reducer'
import s from './CartCheckoutItem.module.sass'
import {Popconfirm, message} from "antd";


const CartCheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    let q = 1

    const confirm = e => {
        message.success('Click on Yes')
    }

    const cancel = e => {
        message.error('Click on No')
    }

    return <>
        <tr>
            <td>
                <div className={s.imgStyle} style={{backgroundImage: `url(${imageUrl})`}} alt='item'/>
            </td>
            <td>
                <span className={s.name}>{name}</span>
            </td>
            <td>
                <span className={s.quantity}>
                            <div className={s.arrow} onClick={() => removeItem(cartItem, q)}>
                                &#10094;
                            </div>
                                    <span className={s.value}>{quantity}</span>
                            <div className={s.arrow} onClick={() => addItem(cartItem, q)}>
                                        &#10095;
                            </div>
                </span>
            </td>
            <td>
                <span className={s.price}>${price}</span>
            </td>
            <td>
                <Popconfirm
                    title="Are you sure delete this product?"
                    placement="top"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <div className={s.removeButton} onClick={() => clearItem(cartItem, quantity)}>
                        &#10005;
                    </div>
                </Popconfirm>
            </td>
        </tr>
    </>
};


export default connect(null, {clearItem, addItem, removeItem})(CartCheckoutItem)