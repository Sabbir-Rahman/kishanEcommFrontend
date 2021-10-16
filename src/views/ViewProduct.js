import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap'

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
      .get(
        'http://127.0.0.1:5000/product/comment?productId=' + productID,
        config
      )
      .then((res) => {
        //console.log('Comment fetch succesfylly')
        //setComments(res.data.comments.comments)

        if (res.data.message == 'Comment fetch succesfylly') {
          console.log('comment fetched!')
          console.log(res.data.comments.comments)
          setComments(res.data.comments.comments)
        } else {
          console.log('No comment')
        }
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

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
        <Card style={{width: '80%'}}>
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
              <Col md='8' style={{ marginLeft: '2%' }}>
                <Row as='h3'>{product.name}</Row>
                <Row style={{ color: 'green' }}><Col>মূল্য: {product.unitPrize} টাকা/{product.unitName}</Col></Row>
                <Row style={{ color: 'green' }}>
                  <Col>সর্বনিম্ন অর্ডার: {product.minOrder} {product.unitName}</Col>
                  <Col>মজুদ: {product.available}{product.unitName}</Col>
                  <Col>তারিখ: {product.availableDate.replace('T00:00:00.000Z', '')}</Col>
                </Row>
                <Row style={{ marginRight: '20px', font: 'status-bar' }}>
                  <Col>বিভাগঃ {product.division}</Col>
                  <Col>জেলাঃ {product.district}</Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>বিবরণী: {product.description}</Col>
                </Row>
                <Row style={{ marginRight: '20px', font: 'status-bar' }}>
                  <Col>বিভাগঃ {product.division}</Col>
                  <Col>জেলাঃ {product.district}</Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
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
                  <Row className='table-hover table-striped'>
                    <thead>
                      <tr>
                        <th className='border-0'></th>
                        <th className='border-0'></th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </Row>
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