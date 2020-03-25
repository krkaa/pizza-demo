const ADD_ITEM = 'cart-reducer/ADD_ITEM'
const REMOVE_ITEM = 'cart-reducer/REMOVE_ITEM'
const CLEAR_ITEM_FROM_CART = 'cart-reducer/CLEAR_ITEM_FROM_CART'
const SET_QUANTITY_ITEMS = 'cart-reducer/SET_QUANTITY_ITEMS'

const INITIAL_STATE = {
    cartItems: [],
    quantityItems: 0
}


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload.item),
                quantityItems: state.quantityItems + action.payload.quantity
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


export default cartReducer