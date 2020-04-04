import {orderAPI} from "../api/api";

const ADD_ITEM = 'cart-reducer/ADD_ITEM'
const ADD_INITAL_ITEMS = 'cart-reducer/ADD_INITAL_ITEMS'
const REMOVE_ITEM = 'cart-reducer/REMOVE_ITEM'
const CLEAR_ITEM_FROM_CART = 'cart-reducer/CLEAR_ITEM_FROM_CART'

const INITIAL_STATE = {
    cartItems: [],
    quantityItems: 0,
    isLoaded: false
}


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload.item),
                quantityItems: state.quantityItems + action.payload.quantity
            };
        case ADD_INITAL_ITEMS:
            return {
                ...state,
                cartItems: action.payload.items.cartItems,
                quantityItems: action.payload.quantity,
                isLoaded: true
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload.item),
                quantityItems: state.quantityItems - action.payload.quantity
            }
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.item.id
                ),
                quantityItems: state.quantityItems - action.payload.quantity
            };
        default:
            return state
    }
}

export const addItem = (item, quantity) => ({type: ADD_ITEM, payload: {item, quantity}})
export const addInitialItem = (items, quantity) => ({type: ADD_INITAL_ITEMS, payload: {items, quantity}})
export const removeItem = (item, quantity) => ({type: REMOVE_ITEM, payload: {item, quantity}})
export const clearItem = (item, quantity) => ({type: CLEAR_ITEM_FROM_CART, payload: {item, quantity}})

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    )
}


export const setUserCart = (cart = [], userId) => async (dispatch) => {

    let data = await orderAPI.getUserCart() // Получаем данные корзины с сервера

    let user = data.find(i => i.userId === userId) // Получаем данные корзины, если они есть у пользователя

    if (user && user.userId === userId && user.id && user.cart.cartItems.length > 0) {
        if (user.cart.cartItems.length > cart.cartItems.length) {
            if (cart.cartItems.length === 0) {
                if (!cart.isLoaded) {
                    await orderAPI.updateUserCart(user.cart, userId, user.id)
                    dispatch(addInitialItem(user.cart, user.cart.quantityItems))
                }
                else {
                    await orderAPI.updateUserCart(cart, userId, user.id)
                    await orderAPI.deleteUserCart(user.id)
                }
            }
            else if ( cart.cartItems.length > 0 ) {
                await orderAPI.updateUserCart(cart, userId, user.id)
            }
        }
        else if (user.cart.quantityItems < cart.quantityItems) {
            await orderAPI.updateUserCart(cart, userId, user.id)
        }
        else if (user.cart.quantityItems > cart.quantityItems) {
            await orderAPI.updateUserCart(cart, userId, user.id)
        }
    } else if (user && user.userId === userId) {
        await orderAPI.updateUserCart(cart, userId, user.id)
    } else if (!user) {
        await orderAPI.setUserCart(cart, userId)
        dispatch(addInitialItem(cart, 0))
    }
}


export default cartReducer