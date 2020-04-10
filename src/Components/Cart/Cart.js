import React, {useState} from 'react'
import {connect} from 'react-redux'
import s from './Cart.module.sass'
import CartCheckoutItem from './CartCheckoutItem/CartCheckoutItem'
import CartOrderForm from "./CartOrderForm";
import {Button, Table} from "react-materialize";
import {Drawer, Input} from 'antd'
import {reduxForm} from "redux-form";
import {setUserAddress} from "../../redux/menu-reducer";


const Cart = ({cart, userAddress, setUserAddress}) => {
    const totalPrice = cart.cartItems.reduce((total, amount) => {
        return amount.price * amount.quantity + total
    }, 0)

    const onSubmit = (formData) => {
        //await setUserAdress(formData.userAdr)
        console.log(formData)
        /*if (formData.phone && formData.userAdr && cart.cartItems.length) {
            showDrawer()
        }*/
    }

    const [visible, setVisible] = useState(false)

    let showDrawer = () => {
        setVisible(true)
    };

    let onClose = () => {
        setVisible(false)
    };

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
        <ContactsReduxForm onSubmit={onSubmit}/>
        <Drawer
            placement="top"
            closable={false}
            onClose={onClose}
            visible={visible}
            height={400}
        >
            <CartOrderForm cart={cart} totalPrice={totalPrice}/>
        </Drawer>
    </div>
    )
}
const mapStateToProps = (state) => ({
    cart: state.cart,
    userAddress: state.menu.userAdress
})

let ContactsReduxForm = reduxForm({form: 'contactsOrder'})(({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <span>Ваш адрес: </span>
            <Input
                placeholder={'Type your adress'}
                name="userAdr"
                required={true}
                type='text'
                defaultValue={''}/>
            <span>Ваш телефон: </span>
            <Input
                placeholder={'Type your phone number'}
                name="phone"
                required={true}
                type={'tel'}/>
            <Button className={`orange ${s.button}`} style={{marginBottom: '20px'}}>Order</Button>
        </form>
    )
})

export default connect(mapStateToProps, {setUserAddress})(Cart)