import React, { useContext } from 'react'
import {productContext} from 'Global/ProductContext'
import { cartContext } from 'Global/CartContext'
import Banner from './Banner'
const Products = () => {
    const {products} = useContext(productContext)
    const {dispatch} = useContext(cartContext)
    return(
          <>
            <Banner />
              <div className="products" style={{marginTop: '30px'}}>
                {products.map(product => (
                  <div className="product" key={product.id}>
                    <div className="pro">
                      <div className="productImage">
                        <img src={product.image} alt="Not found"/>
                      </div>
                      <div className="productDetails">
                        <div className="proName">
                          <h4>{product.name}</h4>
                        </div>
                        <div className="proPrice">
                          {product.price}.00 টাকা
                        </div>
                      </div>
                      <div className="proButton" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})}>
                        <button className="buyNow" >কার্টে যোগ করুন</button>
                      </div>
                      {product.catagory === 'corp' ? <div className="corp">শস্য</div>: ''}
                      {product.catagory === 'fish' ? <div className="fish">মাছ</div>: ''}
                      {product.catagory === 'meat' ? <div className="meat">মাংস</div>: ''}
                      {product.catagory === 'fruit' ? <div className="fruit">ফল</div>: ''}
                    </div>
                  </div>
                ))}
              </div>
          </>
    )
}
 
 export default Products