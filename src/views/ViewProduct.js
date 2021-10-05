import React from 'react'
import ProductContextProvider from 'Global/ProductContext'
import Product from 'components/Product'

function ViewProduct() {
  function reloadPage() {
    window.location.reload()
  }

  return (
    <ProductContextProvider>
      <Product></Product>
    </ProductContextProvider>
  )
}

export default ViewProduct
