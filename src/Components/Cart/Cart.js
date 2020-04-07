import React from 'react'
import {connect} from 'react-redux'
import s from './Cart.module.sass'
import CartCheckoutItem from './CartCheckoutItem/CartCheckoutItem'

const Cart = ({cart}) => {
    const totalPrice = cart.cartItems.reduce((total, amount) => {
        return amount.price * amount.quantity + total
    }, 0)

    const onOrderClick = () => {
        console.log(totalPrice, cart.cartItems)
    }

    return (
        <div className={s.checkoutPage}>
            <div className={s.checkoutHeader}>
                <div className={s.headerBlock}>
                    <span>Product</span>
                </div>
                <div className={s.headerBlock}>
                    <span>Description</span>
                </div>
                <div className={s.headerBlock}>
                    <span>Quantity</span>
                </div>
                <div className={s.headerBlock}>
                    <span>Price</span>
                </div>
                <div className={s.headerBlock}>
                    <span>Remove</span>
                </div>
            </div>
            {
                cart.cartItems.map(cartItem => <CartCheckoutItem key={cartItem.id} cartItem={cartItem}/>)
            }
            <div className={s.total}>
                TOTAL:{totalPrice}$
            </div>
            {
                cart.cartItems.length > 0
                    ? <div className={s.button}><button onClick={onOrderClick}>Order</button></div>
                    : undefined
            }
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, null)(Cart)