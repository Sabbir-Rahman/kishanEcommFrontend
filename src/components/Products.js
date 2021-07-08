import React, { useContext } from 'react'
import { ProductsContext } from 'Global/ProductsContext'

const Products = () => {
    const {products} = useContext(ProductsContext)

    return(
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
                    <div className="add-to-cart">কার্টে যোগ করুন</div>
                    {product.catagory === 'fruit' ? <div className='fruit'>ফল</div>:''}
                    {product.catagory === 'corp' ? <div className='corp'>শস্য</div>:''}
                    {product.catagory === 'fish' ? <div className='fish'>মাছ</div>:''}
                </div>
            ))}
        </div>
    )
}

export default Products