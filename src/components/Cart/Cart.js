import React from 'react'
import { Button, Card } from 'react-bootstrap'
import productData from 'Global/ProductData'
import { useHistory } from 'react-router'

function Cart(param) {

  const history = useHistory()

  function redirect(productID) {
    localStorage.setItem('productID', productID)
    history.push('/product')
  }

  const products = productData(param)
  let cart = []

  products.map((product) => (
    cart.push(
      <div
        style={{
          marginLeft: '.3%',
          marginBottom: '.3%',
          marginRight: '.3%',
          marginTop: '.3%',
          backgroundColor: '#F4FFEE',
        }}
      >
        <Button
          variant='success'
          md='auto'
          style={{ marginLeft: '2%', marginRight: '2%' }}
          onClick={(e) => redirect(product.id)}
          style={{
            background: 'none',
            color: 'inherit',
            border: 'none',
            padding: '0',
            font: 'inherit',
            cursor: 'pointer',
            outline: 'inherit'
          }}
        >
          <Card style={{ backgroundColor: '#F4FFEE' }}>
            <Card.Header style={{ width: '200px', height: '200px', backgroundColor: '#F4FFEE' }}>
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
                  marginTop: '2%',
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
                মূল্য: {product.unitPrize} টাকা/{product.unitName}
              </p>
            </Card.Body>
          </Card>
        </Button>
      </div>
    )
  ))

  return cart
}

export default Cart
