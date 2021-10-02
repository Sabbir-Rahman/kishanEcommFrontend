import React from 'react'
import ProductsContextProvider from 'Global/ProductContext'
import Products from 'components/Products'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const KrishiBazar = () => {

  return (
      <ProductsContextProvider>
          <Router>
            <Switch>
              <Route path='/krishi-bazar' exact>
              <Products/>
              </Route>
            </Switch>
          </Router>
      </ProductsContextProvider>
  )
}

export default KrishiBazar