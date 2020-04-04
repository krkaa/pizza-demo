import React from 'react'
import { connect } from 'react-redux'
import s from './Cart.module.sass'
import CartCheckoutItem from './CartCheckoutItem/CartCheckoutItem'

const Cart = ({cart}) => {
    const totalPrice = cart.cartItems.reduce((total, amount) => {
        return amount.price * amount.quantity + total
    }, 0)

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
                cart.cartItems.map(cartItem => <CartCheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <div className='total'>
                TOTAL:{totalPrice}$</div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, null)(Cart)