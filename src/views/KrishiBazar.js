import React from 'react'
import ProductsContextProvider from 'Global/ProductContext'
import CartContextProvider from 'Global/CartContext'
import Products from 'components/Products'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from 'components/Cart'

const KrishiBazar = () => {
    return(
        <div>
            <ProductsContextProvider>
                <CartContextProvider>
                    <Router>
                        <Switch>
                            <Route path="/krishi-bazar" exact component={Products} />
                            <Route path="/cart" exact component={Cart}/>
                        </Switch>
                    </Router>
                </CartContextProvider>
            </ProductsContextProvider>
        </div>
    )
}

export default KrishiBazar
