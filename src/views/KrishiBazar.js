import React from 'react'
import ProductsContextProvider from 'Global/ProductContext'
import CartContextProvider from 'Global/CartContext'
import Products from 'components/Products'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import axios from 'axios'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const KrishiBazar = () => {

  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Switch>
              <Route path='/krishi-bazar' exact>
              <ProductsContextProvider />
                <Products/>
              </Route>
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  )
}

export default KrishiBazar