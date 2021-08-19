import React from 'react'
import ProductsContextProvider from 'Global/ProductContext'
import Products from 'components/Products'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const KrishiBazar = () => {

  return (
    <div>
      <ProductsContextProvider>
          <Router>
            <Switch>
              <Route path='/krishi-bazar' exact>
              <ProductsContextProvider />
                <Products/>
              </Route>
            </Switch>
          </Router>
      </ProductsContextProvider>
    </div>
  )
}

export default KrishiBazar