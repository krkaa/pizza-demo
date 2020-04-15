import React, {useState} from 'react'
import {connect} from 'react-redux'
import s from './Cart.module.sass'
import CartCheckoutItem from './CartCheckoutItem/CartCheckoutItem'
import CartOrderForm from "./CartOrderForm";
import {Table} from "react-materialize";
import {Drawer} from 'antd'
import {setUserAddress} from "../../redux/menu-reducer";
import CartReduxForm from "./CartReduxForm";


const Cart = ({cart, userAddress, setUserAddress}) => {
    const totalPrice = cart.cartItems.reduce((total, amount) => {
        return amount.price * amount.quantity + total
    }, 0)

    const [visible, setVisible] = useState(false)

    let showDrawer = () => {
        setVisible(true)
    };

    let onClose = () => {
        setVisible(false)
    };

    const onSubmit = (formData) => {
        if (formData) {
            showDrawer()
            setUserAddress(formData.userAddress)
        }
    }

    return (
        <div>
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
            </div>
            {
                cart.cartItems.length
                    ? <CartReduxForm onSubmit={onSubmit}/>
                    : null
            }
            <Drawer
                placement="bottom"
                closable={true}
                onClose={onClose}
                visible={visible}
                height={600}
            >
                <CartOrderForm cart={cart} totalPrice={totalPrice} userAddress={userAddress}/>
            </Drawer>
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart: state.cart,
    userAddress: state.menu.userAdress
})

export default connect(mapStateToProps, {setUserAddress})(Cart)