import React, { useContext } from 'react'
import { ProductsContext } from 'Global/ProductsContext'
import { CartContext } from 'Global/CartContext'
import Banner from './Banner'

const Products = () => {
    const {products} = useContext(ProductsContext)
    const {dispatch, } = useContext(CartContext)
    
    return(
        <div className="container">
            <Banner />
            <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <div className="cover">
                            <div className="product-image">
                                <img src={product.image} alt="not found" />
                            </div>
                            <div className="product-details">
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="product-price">
                                    {product.price}.00 টাকা
                                </div>
                            </div>
                        </div>
                        <div className="add-to-cart" onClick={()=> dispatch({
                            type: 'ADD_TO_CART',
                            id: product.id,
                            product})}>কার্টে যোগ করুন</div>
                        {product.catagory === 'fruit' ? <div className='fruit'>ফল</div>:''}
                        {product.catagory === 'corp' ? <div className='corp'>শস্য</div>:''}
                        {product.catagory === 'fish' ? <div className='fish'>মাছ</div>:''}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products