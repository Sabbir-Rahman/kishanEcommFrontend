import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Admin() {
  const [requests, setRequest] = useState([])

  const ShowRequest = async () => {
    const token = localStorage.getItem('user')

    const _token = token.split('"').join('')
    console.log(token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    axios
      .get('http://127.0.0.1:5000/product/verify', config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        setRequest(res.data)
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  useEffect(async () => {
    ShowRequest()
  }, [])

  let val = []
  if (requests.data != undefined) {
    val = requests.data
  }

  let id = []
  let seller_id = []
  let name = []
  let description = []
  let category = []
  let subCategory = []
  let image = []
  let image2 = []
  let image3 = []
  let unitName = []
  let unitPrize = []
  let bookingPercentage = []
  let available = []
  let minOrder = []
  let availableDate = []
  let division = []
  let district = []
  let upazilla = []
  let isVerified = []
  let isAvailableNow = []
  let rating = []
  let comments = []
  let question = []
  let timestamp = []

  for (let i = 0; i < val.length; i++) {
    id.push(val[i]._id)
    name.push(val[i].name)
    seller_id.push(val[i].seller_id)
    description.push(val[i].description)
    category.push(val[i].catagory)
    subCategory.push(val[i].subCategory)
    image.push(val[i].image)
    image2.push(val[i].image2)
    image3.push(val[i].image3)
    unitName.push(val[i].unitName)
    unitPrize.push(val[i].unitPrize)
    bookingPercentage.push(val[i].bookingPercentage)
    available.push(val[i].available)
    minOrder.push(val[i].minOrder)
    rating.push(val[i].rating)
    availableDate.push(val[i].availableDate)
    division.push(val[i].division)
    district.push(val[i].district)
    upazilla.push(val[i].upazilla)
    isVerified.push(val[i].isVerified)
    isAvailableNow.push(val[i].isAvailableNow)
    rating.push(val[i].rating)
    comments.push(val[i].comments)
    question.push(val[i].question)
    timestamp.push(val[i].timestamp)
  }

  const approve = (product_id) => {
    //console.log(product_id)

    const productID = {
      productId: product_id,
      isVerified: true,
      message: 'Your product is verified. Thank you',
    }
    const token = localStorage.getItem('user')
    const _token = token.split('"').join('')
    //console.log(`Bearer ` + _token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }
    axios
      .post('http://127.0.0.1:5000/product/verify', productID, config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        alert('Product verified successfully')
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  let unverifiedRequests = []
  for (let i = 0; i < val.length; i++) {
    unverifiedRequests.push(
      <Col
        style={{ background: 'rgba(181, 218, 164, .3)', borderColor: 'white' }}
      >
        <table>
          <th>
            <h3 style={{ marginRight: '20px' }}>{unitName[i]}</h3>
          </th>
          <th style={{ color: 'gray', marginLeft: '5px' }}>আইডি: {id[i]}</th>
        </table>
        <table>
          <th>
            <h5 style={{ marginLeft: '30px', font: 'message-box' }}>
              বুকিং মানি:
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
              {name[i]} টাকা
            </h5>
          </th>
          <th>
            <h5 style={{ marginLeft: '30px', font: 'message-box' }}>
              মোট মূল্য:
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
              {description[i]} টাকা
            </h5>
          </th>
        </table>
        <table>
          <th>
            <h5>পরিমাণ:</h5>
          </th>
          <th>
            <h5
              style={{
                color: 'green',
                marginLeft: '10px',
                font: 'message-box',
              }}
            >
              {seller_id[i]} {minOrder[i]}
            </h5>
          </th>
          <th>
            <h5 style={{ marginLeft: '30px', font: 'message-box' }}>
              স্ট্যাটাস:
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
              {isVerified[i]}
            </h5>
          </th>
        </table>
        <table>
          <th>
            <h5>ক্রেতার নাম:</h5>
          </th>
          <th>
            <h5
              style={{
                color: 'green',
                marginLeft: '10px',
                font: 'message-box',
              }}
            >
              {minOrder[i]}
            </h5>
          </th>
        </table>
        <table style={{ marginLeft: '85%' }}>
          <Button
            variant='success'
            value={id[i]}
            onClick={(e) => approve(e.target.value)}
          >
            এপ্রুভ করুন
          </Button>
        </table>
        <Row style={{ height: '15px' }}></Row>
        <Row style={{ background: 'white', height: '15px' }}></Row>
      </Col>
    )
  }

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as='h4'>পণ্য বিক্রয় অনুরোধ</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>{unverifiedRequests}</Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Admin
