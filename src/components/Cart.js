import React, { useContext } from 'react'
import { productContext } from 'Global/ProductContext'
import { Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

const Cart = () => {
  const history = useHistory()
  const { products } = useContext(productContext)

  function redirect(product_id) {
    console.log(product_id)
    history.push('/product')
  }

  return (
    <>
      {products.map((product) => (
        <Card
          key={product.id}
          style={{
            marginRight: '5px',
            marginLeft: '5px',
            overflow: 'hidden',
          }}
        >
          <Card.Header style={{ width: '220px', height: '200px' }}>
            <img
              src={product.image}
              alt='দুঃখিত! পণ্যের ছবি পাওয়া যায়নি'
              style={{
                background: 'white',
                width: '220px',
                height: '200px',
                overflow: 'hidden',
              }}
            />
          </Card.Header>
          <Card.Body>
            <p
              style={{
                marginTop: '10px',
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
              style={{ fontSize: '15px', color: 'green', marginBottom: '0px' }}
            >
              মূল্য: {product.unitPrize} টাকা/{product.unitName}
            </p>
          </Card.Body>
          <Row>
            <BrowserRouter>
              <div className='proButton'>
                <button
                  value={product.id}
                  onClick={(e) => redirect(e.target.value)}
                >
                  পণ্য দেখুন
                </button>
              </div>
            </BrowserRouter>
          </Row>
        </Card>
      ))}
    </>
  )
}

export default Cart
