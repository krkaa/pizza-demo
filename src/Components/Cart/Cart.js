import React, {useEffect, useRef, useState} from 'react'
import {connect} from 'react-redux'
import s from './Cart.module.sass'
import CartCheckoutItem from './CartCheckoutItem/CartCheckoutItem'
import CartOrderForm from "./CartOrderForm";
import {Button, Table} from "react-materialize";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
const useMountEffect = (fun) => useEffect(fun, [])

const Cart = ({cart}) => {
    const totalPrice = cart.cartItems.reduce((total, amount) => {
        return amount.price * amount.quantity + total
    }, 0)

    const [isOrder, setIsOrder] = useState(false)

    const myRef = useRef(1)

    useMountEffect(() => scrollToRef(myRef)) // Scroll on mount

    return <>
        <Table>
            <thead>
            <tr>
                <th data-field="Product">
                    Product
                </th>
                <th data-field="Description">
                    Description
                </th>
                <th data-field="Quantity">
                    Quantity
                </th>
                <th data-field="Price">
                    Price
                </th>
                <th data-field="Remove">
                    Remove
                </th>
            </tr>
            </thead>
            <tbody>
            {
                cart.cartItems.map(cartItem => <CartCheckoutItem key={cartItem.id} cartItem={cartItem}/>)
            }
            </tbody>
        </Table>
        <div className={s.orderWrapper}>
            <div className={s.total}>
                Total: {totalPrice}$
            </div>
            {
                cart.cartItems.length
                    ? <Button
                        onClick={() => (
                            setIsOrder(true),
                                scrollToRef(myRef)
                        )}
                        className={`orange ${s.button}`}>Order</Button>
                    : null
            }
        </div>
        {
            isOrder
                ? <div ref={myRef}><CartOrderForm cart={cart} totalPrice={totalPrice} ref={myRef}/></div>
                : null
        }
    </>
}
const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, null)(Cart)