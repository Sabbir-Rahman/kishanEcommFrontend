import React, {useContext} from 'react'
import { CartContext } from 'Global/CartContext'
import { Link } from 'react-router-dom'
import './App.css'
import {Navbar} from 'react-bootstrap'

const KrishiBazarNavbar = ({cartToggle}) => {
    
    const {shoppingCart} = useContext(CartContext)

    return(
        <Navbar>
        <nav>
            <ul className="left">
                <li><Link to="/krishi-bazar">কৃষি বাজার</Link></li>
            </ul>
            <ul className="right">
                <li onClick={cartToggle}>
                    <Link to="/cart">
                        <span className="dollor">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        <span className="shoppingCartTotal">
                            {shoppingCart ? shoppingCart.length : 0}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
        </Navbar>
    )
}

export default KrishiBazarNavbar