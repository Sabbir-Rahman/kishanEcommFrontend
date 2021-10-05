import React, { useContext } from 'react'
import { productContext } from 'Global/ProductContext'
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'

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

  let id = []
  let seller_id = []
  let name = []
  let description = []
  let image = []
  let unitName = []
  let unitPrize = []
  let bookingPercentage = []
  let available = []
  let minOrder = []
  let availableDate = []
  let division = []
  let district = []
  let upazilla = []

  let _id = []
  let _seller_id = []
  let _name = []
  let _description = []
  let _image = []
  let _unitName = []
  let _unitPrize = []
  let _bookingPercentage = []
  let _available = []
  let _minOrder = []
  let _availableDate = []
  let _division = []
  let _district = []
  let _upazilla = []

  const { products } = useContext(productContext)

  products.map(
    (product) => (
      id.push(product.id),
      name.push(product.name),
      seller_id.push(product.seller_id),
      description.push(product.description),
      image.push(product.image),
      unitName.push(product.unitName),
      unitPrize.push(product.unitPrize),
      bookingPercentage.push(product.bookingPercentage),
      available.push(product.available),
      minOrder.push(product.minOrder),
      availableDate.push(product.availableDate),
      division.push(product.division),
      district.push(product.district),
      upazilla.push(product.upazilla)
    )
  )

  const num = localStorage.getItem('productID')

  for (let i = 0; i < id.length; i++) {
    if (num == id[i]) {
      _id = id[i]
      _seller_id = seller_id[i]
      _name = name[i]
      _description = description[i]
      _image = image[i]
      _unitName = unitName[i]
      _unitPrize = unitPrize[i]
      _bookingPercentage = bookingPercentage[i]
      _available = available[i]
      _minOrder = minOrder[i]
      _availableDate = available[i]
      _division = division[i]
      _district = district[i]
      _upazilla = upazilla[i]
    }
  }

  console.log(_unitPrize)

  return (
    <>
      <div className='rna-container' style={{ marginTop: '5px' }}></div>
      <Container fluid>
        <Card>
          <Card.Body>
            <Row>
              <Col md='6'>
                <img
                  // src={bgImage}
                  alt='পণ্যের ছবি পাওয়া যায়নি'
                  style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                />
              </Col>
              <Col md='6'>
                <table>
                  <th>
                    <h3 style={{ marginRight: '50px' }}>{_name}</h3>
                  </th>
                  <th style={{ color: 'gray', marginLeft: '5px' }}>
                    {' '}
                    আইডি: {_id}{' '}
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
                      {_unitPrize} টাকা/{_unitName}
                    </h5>
                  </th>
                  <th>
                    <h5
                      style={{
                        color: 'green',
                        marginRight: '50px',
                        font: 'message-box',
                      }}
                    >
                      {_bookingPercentage}% বুকিং চার্জ
                    </h5>{' '}
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
                      {_minOrder} {_unitName}
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
                      {_available} {_unitName}
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
                      {_availableDate}
                    </h5>
                  </th>
                </table>
                <table>
                  <th>
                    <h5 style={{ marginRight: '30px', font: 'status-bar' }}>
                      বিভাগঃ {_division}
                    </h5>
                  </th>
                  <th>
                    <h5 style={{ marginRight: '30px', font: 'status-bar' }}>
                      জেলাঃ {_district}
                    </h5>
                  </th>
                  <th>
                    <h5 style={{ marginRight: '30px', font: 'status-bar' }}>
                      উপজেলাঃ {_upazilla}
                    </h5>
                  </th>
                </table>
                <p>{_description}</p>
                <table>
                  <th>
                    <h5 style={{ marginRight: '20px', font: 'message-box' }}>
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
                      {_seller_id}
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
                        value={_id}
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
    </>
  )
}

export default Product
