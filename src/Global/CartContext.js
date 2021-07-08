import React, {createContext, useReducer} from 'react'
import { CartReducer } from './CardReducer'

export const cartContext = createContext()

const CartContextProvider = (props) => {
    const [cart, dispatch] = useReducer(CartReducer, {ShoppingCart: [], totalPrice: 0, quantity: 0})
    return(
        <CartContextProvider.Provider value={{...cart, dispatch}}>
            {props.children}
        </CartContextProvider.Provider>   
    )
}

export default CartContextProvider