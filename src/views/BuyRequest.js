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
import { useEffect, useState } from 'react'

// data fetch

function Maps() {
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
      .get('http://127.0.0.1:5000/product/order/orderRequest', config)
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

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as='h4'>পণ্য ক্রয় অনুরোধ</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md='6'>
                <h5>
                  <small>ক্রয় সম্পন্নকৃত পণ্যসমূহ</small>
                </h5>
                <Alert className='alert-with-icon' variant='info'>
                  <button
                    aria-hidden={true}
                    className='close'
                    data-dismiss='alert'
                    type='button'
                  >
                    <i className='nc-icon nc-simple-remove'></i>
                  </button>
                  <span
                    data-notify='icon'
                    className='nc-icon nc-bell-55'
                  ></span>
                  <span>পণ্য</span>
                </Alert>
                <Alert className='alert-with-icon' variant='info'>
                  <button
                    aria-hidden={true}
                    className='close'
                    data-dismiss='alert'
                    type='button'
                  >
                    <i className='nc-icon nc-simple-remove'></i>
                  </button>
                  <span
                    data-notify='icon'
                    className='nc-icon nc-bell-55'
                  ></span>
                  <span>পণ্য</span>
                </Alert>
                <Alert className='alert-with-icon' variant='info'>
                  <button
                    aria-hidden={true}
                    className='close'
                    data-dismiss='alert'
                    type='button'
                  >
                    <i className='nc-icon nc-simple-remove'></i>
                  </button>
                  <span
                    data-notify='icon'
                    className='nc-icon nc-bell-55'
                  ></span>
                  <span>পণ্য</span>
                </Alert>
                <Alert className='alert-with-icon' variant='info'>
                  <button
                    aria-hidden={true}
                    className='close'
                    data-dismiss='alert'
                    type='button'
                  >
                    <i className='nc-icon nc-simple-remove'></i>
                  </button>
                  <span
                    data-notify='icon'
                    className='nc-icon nc-bell-55'
                  ></span>
                  <span>পণ্য</span>
                </Alert>
              </Col>
              <Col md='6'>
                <h5>
                  <small>ক্রয় অসম্পন্ন পণ্যসমূহ</small>
                </h5>
                <Alert variant='success'>
                  <button
                    aria-hidden={true}
                    className='close'
                    data-dismiss='alert'
                    type='button'
                  >
                    <i className='nc-icon nc-simple-remove'></i>
                  </button>
                  <span>
                    <b>পণ্য -</b>
                    পণ্য
                  </span>
                </Alert>
                <Alert variant='success'>
                  <button
                    aria-hidden={true}
                    className='close'
                    data-dismiss='alert'
                    type='button'
                  >
                    <i className='nc-icon nc-simple-remove'></i>
                  </button>
                  <span>
                    <b>পণ্য -</b>
                    পণ্য
                  </span>
                </Alert>
                <Alert variant='success'>
                  <button
                    aria-hidden={true}
                    className='close'
                    data-dismiss='alert'
                    type='button'
                  >
                    <i className='nc-icon nc-simple-remove'></i>
                  </button>
                  <span>
                    <b>পণ্য -</b>
                    পণ্য
                  </span>
                </Alert>
                <Alert variant='success'>
                  <button
                    aria-hidden={true}
                    className='close'
                    data-dismiss='alert'
                    type='button'
                  >
                    <i className='nc-icon nc-simple-remove'></i>
                  </button>
                  <span>
                    <b>পণ্য -</b>
                    পণ্য
                  </span>
                </Alert>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Maps
