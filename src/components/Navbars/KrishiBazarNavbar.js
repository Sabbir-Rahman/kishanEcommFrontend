import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const KrishiBazarNavbar = () => {
    return(
        <nav>
            <ul className="left">
                <li><Link to="/krishi-bazar">কৃষি বাজার</Link></li>
            </ul>
            <ul className="right">
                <li>
                    <Link to="cart">
                        <span className="shoppingCart">
                            <i class="fas fa-cart-plus"></i>
                            <span className="cartCount">0</span>
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default KrishiBazarNavbar