import React from 'react'
import ProductsContextProvider from 'Global/ProductContext'
import CartContextProvider from 'Global/CartContext'
import Products from 'components/Products'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from 'components/Cart'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const KrishiBazar = () => {
  // const [products, setProduct] = useState([])
  // //const token = useSelector((state) => state.token)

  // const ShowProduct = async () => {
  //   const token = localStorage.getItem('user')
  //   await axios
  //     .get('http://127.0.0.1:5000/product/view', {
  //       headers: { Authorization: token },
  //     })
  //     .then((res) => setProduct(res.data))
  // }

  // useEffect(async () => {
  //   ShowProduct()
  // }, [])

  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Switch>
              <Route path='/krishi-bazar' exact>
                <ProductsContextProvider />
                <Products />
              </Route>
              <Route path='/cart' exact component={Cart} />
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  )
}

export default KrishiBazar
