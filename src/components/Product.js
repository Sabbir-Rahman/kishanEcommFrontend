import React, { useContext, useState, useEffect } from 'react'
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap'
import axios from 'axios'
import productData from 'Global/ProductData'

const Product = () => {
  const [quantity, setQuantity] = useState('')
  const resetFields = () => {
    setQuantity('')
  }

  async function order(product_id) {
    //data adding
    const product = {
      productId: product_id,
      quantity: quantity,
    }

    console.log(product)

    resetFields()

    // axios
    const token = localStorage.getItem('user')
    const _token = token.split('"').join('')
    //console.log(`Bearer ` + _token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    axios
      .post('http://127.0.0.1:5000/product/order', product, config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        alert('Product order successfully')
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })

    //data added
  }

  let toView = []

  const products = productData()

  let productID = localStorage.getItem('productID')

  products.map((product) =>
    productID == product.id
      ? toView.push(
          <Container fluid>
            <Card>
              <Card.Body>
                <Row>
                  <Col md='6'>
                    <img
                      src={product.image}
                      alt='পণ্যের ছবি পাওয়া যায়নি'
                      style={{
                        background: 'white',
                        width: '200px',
                        height: '180px',
                        overflow: 'hidden',
                      }}
                    />
                  </Col>
                  <Col md='6'>
                    <table>
                      <th>
                        <h3 style={{ marginRight: '50px' }}>{product.name}</h3>
                      </th>
                      <th style={{ color: 'gray', marginLeft: '5px' }}>
                        {' '}
                        আইডি: {product.id}{' '}
                      </th>
                    </table>
                    <table>
                      <th>
                        <h5
                          style={{
                            color: 'green',
                            marginRight: '50px',
                            font: 'message-box',
                          }}
                        >
                          মূল্য: {product.unitPrize} টাকা/{product.unitName}
                        </h5>
                      </th>
                    </table>
                    <table>
                      <th>
                        <h5>সর্বনিম্ন অর্ডার:</h5>
                      </th>
                      <th>
                        <h5
                          style={{
                            color: 'green',
                            marginLeft: '10px',
                            font: 'message-box',
                          }}
                        >
                          {product.minOrder} {product.unitName}
                        </h5>
                      </th>
                      <th>
                        <h5 style={{ marginLeft: '30px', font: 'message-box' }}>
                          মজুদ:
                        </h5>
                      </th>
                      <th>
                        <h5
                          style={{
                            color: 'green',
                            marginLeft: '10px',
                            font: 'message-box',
                          }}
                        >
                          {product.available} {product.unitName}
                        </h5>
                      </th>
                      <th>
                        <h5 style={{ marginLeft: '30px', font: 'message-box' }}>
                          তারিখ:
                        </h5>
                      </th>
                      <th>
                        <h5
                          style={{
                            color: 'green',
                            marginLeft: '10px',
                            font: 'message-box',
                          }}
                        >
                          {product.availableDate}
                        </h5>
                      </th>
                    </table>
                    <table>
                      <th>
                        <h5 style={{ marginRight: '30px', font: 'status-bar' }}>
                          বিভাগঃ {product.division}
                        </h5>
                      </th>
                      <th>
                        <h5 style={{ marginRight: '30px', font: 'status-bar' }}>
                          জেলাঃ {product.district}
                        </h5>
                      </th>
                    </table>
                    <table>
                      <th>
                        <h5
                          style={{
                            color: 'black',
                            marginRight: '50px',
                            font: 'message-box',
                          }}
                        >
                          বিবরণী: {product.description}
                        </h5>
                      </th>
                    </table>
                    <table>
                      <th>
                        <h5
                          style={{ marginRight: '20px', font: 'message-box' }}
                        >
                          বিক্রেতা:
                        </h5>
                      </th>
                      <th>
                        <h5
                          style={{
                            color: 'green',
                            marginRight: '10px',
                            font: 'message-box',
                          }}
                        >
                          {product.seller_id}
                        </h5>{' '}
                      </th>
                      <th>
                        <h5 style={{ color: 'gray', font: 'status-bar' }}>
                          আড়তদার
                        </h5>{' '}
                      </th>
                    </table>
                    <Form>
                      <table>
                        <th>
                          <Form.Control
                            type='number'
                            name='qty'
                            placeholder='পণ্যের পরিমাণ'
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                        </th>
                        <th>
                          <Button
                            value={product.id}
                            onClick={(e) => order(e.target.value)}
                            variant='success'
                            style={{ marginLeft: '20px' }}
                          >
                            ক্রয় অনুরোধ প্রেরণ করুন
                          </Button>
                        </th>
                      </table>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        )
      : null
  )

  return <>{toView}</>
}

export default Product
