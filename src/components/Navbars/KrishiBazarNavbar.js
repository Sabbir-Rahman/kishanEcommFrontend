import React, {useContext} from 'react'
import { cartContext } from 'Global/CartContext'
import { Link } from 'react-router-dom'

const KrishiBazarNavbar = ({cartToggle}) => {
    const {shoppingCart} = useContext(cartContext);
    return(
        <nav>
            
            <ul className="left">
                 <li>
                     <Link to="#">কৃষি বাজার</Link>
                </li>
                <h>
                    <Link to="/">মূলপাতা</Link>
                </h>
                <h>
                    <Link to="/home">কৃষি ফোরাম</Link>
                </h>
                <h>
                    <Link to="/home">ফসলের ডাক্তার</Link>
                </h>

            </ul>
            <ul className="right">
                <li onClick={cartToggle}>
                    <Link to="/cart">
                        <span className="dollor">
                            <i className="fas fa-cart-plus">
                            </i>
                        </span>
                        <span className="shoppingCartTotal">
                            {shoppingCart ? shoppingCart.length : 0}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default KrishiBazarNavbar