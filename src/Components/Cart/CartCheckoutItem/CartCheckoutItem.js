import React from 'react'
import {connect} from 'react-redux'
import {clearItem, removeItem, addItem} from '../../../redux/cart-reducer'
import s from './CartCheckoutItem.module.sass'


const CartCheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    let q = 1
    return (
        <div className='container'>
            <div className='row'>
                <div className="col">
                    <div className={s.checkoutItem}>
                        <div className={s.imageContainer}>
                            <div className={s.imgStyle} style={{backgroundImage: `url(${imageUrl})`}} alt='item'/>
                        </div>

                        <span className={s.name}>{name}</span>
                        <span className={s.quantity}>
                <div className={s.arrow} onClick={() => removeItem(cartItem, q)}>
                    &#10094;
          </div>
                <span className={s.value}>{quantity}</span>
                <div className={s.arrow} onClick={() => addItem(cartItem, q)}>
                    &#10095;
          </div>
            </span>
                        <span className={s.price}>${price}</span>
                        <div className={s.removeButton} onClick={() => clearItem(cartItem, quantity)}>
                            &#10005;
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default connect(null, {clearItem, addItem, removeItem})(CartCheckoutItem)