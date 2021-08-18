import React from 'react'

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function Statistics() {
  const [OutGoingRequests, setOutGoingRequests] = useState([])
  const [IncomingRequests, setIncomingRequests] = useState([])

  const ShowOutGoingRequest = async () => {
    const token = localStorage.getItem('user')

    const _token = token.split('"').join('')
    console.log(token)
    //console.log(`Bearer ` + _token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    const params = { status: 'accepted' }

    axios
      .get('http://127.0.0.1:5000/product/order/orderRequest', config, {
        params,
      })
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        setOutGoingRequests(res.data)
        //alert('Data fetched')
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  const ShowInComingRequest = async () => {
    const token = localStorage.getItem('user')

    const _token = token.split('"').join('')
    console.log(token)
    //console.log(`Bearer ` + _token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    const params = { status: 'accepted' }

    axios
      .get('http://127.0.0.1:5000/product/order/buyRequest', config, {
        params,
      })
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        setIncomingRequests(res.data)
        //alert('Data fetched')
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  useEffect(async () => {
    ShowOutGoingRequest()
    ShowInComingRequest()
  }, [])

  console.log(OutGoingRequests)
  console.log(IncomingRequests)

  return (
    <>
      <Container fluid>
        <Row>
          <Col md='12'>
            <Card className='strpied-tabled-with-hover'>
              <Card.Header>
                <Card.Title as='h4'>ক্রয় তালিকা</Card.Title>
                <p className='card-category'>ক্রয়কৃত পণ্যসমূহ</p>
              </Card.Header>
              <Card.Body className='table-full-width table-responsive px-0'>
                <Table className='table-hover table-striped'>
                  <thead>
                    <tr>
                      <th className='border-0'>ক্রমিক</th>
                      <th className='border-0'>পণ্যের নাম</th>
                      <th className='border-0'>মূল্য</th>
                      <th className='border-0'>পরিমাণ</th>
                      <th className='border-0'>ক্রয়ের তাং</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>১</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>২</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md='12'>
            <Card className='card-plain table-plain-bg'>
              <Card.Header>
                <Card.Title as='h4'>বিক্রয় তালিকা</Card.Title>
                <p className='card-category'>বিক্রয়কৃত পণ্যসমূহ</p>
              </Card.Header>
              <Card.Body className='table-full-width table-responsive px-0'>
                <Table className='table-hover'>
                  <thead>
                    <tr>
                      <th className='border-0'>ক্রমিক</th>
                      <th className='border-0'>পণ্যের নাম</th>
                      <th className='border-0'>মূল্য</th>
                      <th className='border-0'>পরিমাণ</th>
                      <th className='border-0'>ক্রয়ের তাং</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>১</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>২</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Statistics
