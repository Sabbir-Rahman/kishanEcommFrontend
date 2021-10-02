import React from 'react'
import ProductContextProvider from 'Global/ProductContext'
import Product from 'components/Product'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function ViewProduct() {

  return (
    <ProductContextProvider>
      <Router>
        <Switch>
          <Route path='/product' exact>
            <Product/>
            </Route>
        </Switch>
        </Router>
    </ProductContextProvider>
  )
}

export default ViewProduct
