import React, { useContext } from 'react'
import { productContext } from 'Global/ProductContext'
import { Button, Card, Row } from 'react-bootstrap'

const Cart = () => {
  const { products } = useContext(productContext)

  function redirect(productID) {
    localStorage.setItem('productID', productID)
    window.location.replace('/product')
  }

  return (
    <>
      {products.map((product) => (
        <div
          style={{
            marginLeft: '.3%',
            marginBottom: '.3%',
            marginRight: '.3%',
            marginTop: '.3%'
          }}
        >
          <Button
            variant='success'
            marginRight
            onClick={(e) => redirect(product.id)}
          >
            <Card>
              <Card.Header style={{ width: '200px', height: '180px' }}>
                <img
                  src={product.image}
                  alt='দুঃখিত! পণ্যের ছবি পাওয়া যায়নি'
                  style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                />
              </Card.Header>
              <Card.Body>
                <p
                  style={{
                    marginTop: '5%',
                    fontSize: '20px',
                    marginBottom: '0px',
                  }}
                >
                  {product.name}
                </p>
                <p
                  style={{
                    marginTop: '0px',
                    color: 'grey',
                    fontSize: '12px',
                    marginBottom: '0px',
                  }}
                >
                  সর্বনিম্ন অর্ডার {product.minOrder} {product.unitName}
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'green',
                    marginBottom: '0px',
                  }}
                >
                  মূল্য: {product.price} টাকা/{product.unitName}
                </p>
              </Card.Body>
            </Card>
          </Button>
        </div>
      ))}
    </>
  )
}

export default Cart
