import React, {createContext} from 'react'

export const cartContext = createContext()

const CartContextProvider = (props) => {
    <CartContextProvider.Provider>
        {props.children}
    </CartContextProvider.Provider>
}

export default CartContextProvider