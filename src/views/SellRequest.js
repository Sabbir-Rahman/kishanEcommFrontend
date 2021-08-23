import React from 'react'
import {
  Alert,
  Badge,
  Button,
  Card,
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
// data fetch

function Sellrequset() {
  const [requests, setRequest] = useState([])

  const ShowRequest = async () => {
    const token = localStorage.getItem('user')

    const _token = token.split('"').join('')
    console.log(token)
    //console.log(`Bearer ` + _token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    axios
      .get('http://127.0.0.1:5000/product/order/buyRequest', config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        setRequest(res.data)
        alert('Data fetched')
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  useEffect(async () => {
    ShowRequest()
  }, [])

  // data fetched.. request.data
  // bookingMoney: 37.5
  // buyerEmail: 'a@gmail.com'
  // buyerName: 'a'
  // buyer_id: '610189cfc4cd5804d00a60a5'
  // buyingMoney: 375
  // buyingQuantity: 30
  // buyingQuantityUnit: 'kg'
  // productName: 'product22'
  // product_id: '611c0b5c0c64c12028667217'
  // seller_id: '60e5d97708d3471718704cee'
  // status: 'accepted'
  // timestamp: '2021-08-17T18:45:19.700Z'

  console.log(requests.data)
  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as='h4'>পণ্য বিক্রয় অনুরোধ</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md='6'>
                <h5>
                  <small>বিক্রয় সম্পন্নকৃত পণ্যসমূহ</small>
                </h5>
                <Row
                  style={{
                    background: 'rgba(181, 218, 164, .3)',
                    width: '100%',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '5px',
                  }}
                >
                  <Col md='8' style={{ color: 'green', width: '80%' }}>
                    পণ্যের নাম
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>টিক</Button>
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>ক্রস</Button>
                  </Col>
                </Row>

                <Row
                  style={{
                    background: 'rgba(181, 218, 164, .3)',
                    width: '100%',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '5px',
                  }}
                >
                  <Col md='8' style={{ color: 'green', width: '80%' }}>
                    পণ্যের নাম
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>টিক</Button>
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>ক্রস</Button>
                  </Col>
                </Row>

                <Row
                  style={{
                    background: 'rgba(181, 218, 164, .3)',
                    width: '100%',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '5px',
                  }}
                >
                  <Col md='8' style={{ color: 'green', width: '80%' }}>
                    পণ্যের নাম
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>টিক</Button>
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>ক্রস</Button>
                  </Col>
                </Row>
              </Col>
              <Col md='6'>
                <h5>
                  <small>বিক্রয় অসম্পন্ন পণ্যসমূহ</small>
                </h5>
                <Row
                  style={{
                    background: 'rgba(181, 218, 164, .3)',
                    width: '100%',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '5px',
                  }}
                >
                  <Col md='8' style={{ color: 'green', width: '80%' }}>
                    পণ্যের নাম
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>টিক</Button>
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>ক্রস</Button>
                  </Col>
                </Row>

                <Row
                  style={{
                    background: 'rgba(181, 218, 164, .3)',
                    width: '100%',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '5px',
                  }}
                >
                  <Col md='8' style={{ color: 'green', width: '80%' }}>
                    পণ্যের নাম
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>টিক</Button>
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>ক্রস</Button>
                  </Col>
                </Row>

                <Row
                  style={{
                    background: 'rgba(181, 218, 164, .3)',
                    width: '100%',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '5px',
                  }}
                >
                  <Col md='8' style={{ color: 'green', width: '80%' }}>
                    পণ্যের নাম
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>টিক</Button>
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>ক্রস</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Sellrequset
