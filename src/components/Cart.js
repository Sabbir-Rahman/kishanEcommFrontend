import React, { useContext } from 'react'
import { CartContext } from 'Global/CartContext'

const Cart = () => {

    const data = useContext(CartContext)
    console.log(data)

    return (
        <div className="container">
            <div className="cart-container" style={{marginTop: '100px'}}>
                <h2>Shopping Cart</h2>
            </div>
        </div>
    )
}

export default Cart