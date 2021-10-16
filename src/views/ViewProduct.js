import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card, Container, Row, Col, Form, Table } from 'react-bootstrap'

function ViewProduct() {
  const [quantity, setQuantity] = useState('')
  const [comments, setComments] = useState([])

  async function order(product_id) {
    const product = {
      productId: product_id,
      quantity: quantity,
    }
    const token = localStorage.getItem('user')
    const _token = token.split('"').join('')
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
  }

  const productID = localStorage.getItem('productID')
  console.log(productID, 'আর তো ভাল্লাগে না বাল‍!')

  const ShowProduct = async () => {
    const token = localStorage.getItem('user')
    await axios
      .get('http://127.0.0.1:5000/product/view?_id=' + productID, {
        headers: { Authorization: token },
      })
      .then((res) => setProduct(res.data))
  }

  const ShowComment = async () => {
    const token = localStorage.getItem('user')

    const _token = token.split('"').join('')
    //console.log(product_id)

    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    axios
      .get('http://127.0.0.1:5000/product/comment?_id=' + productID, config)
      .then((res) => {
        if (res.data.message == 'Comment fetch succesfylly') {
          console.log('Comment fetch succesfylly')
          setComments(res.data.comments.comments)
        } else {
          console.log('no comment')
        }
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  console.log(comments)

  useEffect(async () => {
    ShowProduct()
    ShowComment()
  }, [])

  const [products, setProduct] = useState([])
  let product
  if (products.data != undefined) {
    product = products.data[0]
    return (
      <Container
        fluid
        className='SignInAndUP'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Card>
          <Card.Body>
            <Row>
              <Col md='3'>
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
              <Col md='9'>
                <table>
                  <th>
                    <h3>{product.name}</h3>
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
                <Form style={{ marginLeft: '40%' }}>
                  <Row>
                    <Col>
                      <Form.Control
                        type='number'
                        name='qty'
                        placeholder='পণ্যের পরিমাণ'
                        size='sm'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Button
                        value={product._id}
                        onClick={(e) => order(e.target.value)}
                        variant='success'
                        size='sm'
                      >
                        ক্রয় অনুরোধ প্রেরণ করুন
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <Row>
              <Card style={{ width: '100%', margin: '1%' }}>
                <Card.Title as='h4'>মন্তব্যসমূহ</Card.Title>
                <Card.Body>
                  <Table className='table-hover table-striped'>
                    <thead>
                      <tr>
                        <th className='border-0'></th>
                        <th className='border-0'></th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  } else {
    return <></>
  }
}

export default ViewProduct
