import React from 'react'
import KrishiBazarNavbar from 'components/Navbars/KrishiBazarNavbar'
import Banner from 'components/Banner'
import ProductsContextProvider from 'Global/ProductsContext'
import Products from 'components/Products'
import './style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const KrishiBazar = () => {
    return(
        <div>
            <ProductsContextProvider>
                <Router>
                    <KrishiBazarNavbar/>
                    <Banner/>
                    <Switch>
                        <Route path="/krishi-bazar" exact component={Products} />
                    </Switch>
                </Router>
            </ProductsContextProvider>
        </div>
    )
}

export default KrishiBazar
