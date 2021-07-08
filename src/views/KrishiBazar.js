import React from 'react'
import KrishiBazarNavbar from 'components/Navbars/KrishiBazarNavbar'
import ProductsContextProvider from 'Global/ProductsContext'
import Products from 'components/Products'
import './style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from 'components/Cart'

const KrishiBazar = () => {
    return(
        <div>
            <ProductsContextProvider>
                <Router>
                    <KrishiBazarNavbar/>
                    <Switch>
                        <Route path="/krishi-bazar" exact component={Products} />
                        <Route path="/cart" exact component={Cart}/>
                    </Switch>
                </Router>
            </ProductsContextProvider>
        </div>
    )
}

export default KrishiBazar
