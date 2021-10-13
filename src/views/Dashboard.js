import React from 'react'

// react-bootstrap components
import {
  Card,
  Table,
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import axios from 'axios'
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

    const params = { status: 'booked' }

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

  // console.log(OutGoingRequests)
  // console.log(IncomingRequests)

  let buyRequests = []
  let _buyRequest = []

  if (OutGoingRequests.data != undefined) {
    buyRequests = OutGoingRequests.data
  }
  let buyingMoney = []
  let buyingQuantity = []
  let productName = []

  for (let i = 0; i < buyRequests.length; i++) {
    buyingMoney.push(buyRequests[i].buyingMoney)
    buyingQuantity.push(buyRequests[i].buyingQuantity)
    productName.push(buyRequests[i].productName)
  }

  for (let i = 0; i < buyRequests.length; i++) {
    _buyRequest.push(
      <tr>
        <td>{i + 1}</td>
        <td>{productName[i]}</td>
        <td>{buyingMoney}</td>
        <td>{buyingQuantity}</td>
      </tr>
    )
  }

  // console.log('yes', buyingMoney)

  let sellRequests = []
  let _sellRequest = []
  if (IncomingRequests.data != undefined) {
    sellRequests = IncomingRequests.data
  }

  let _buyingMoney = []
  let _buyingQuantity = []
  let _productName = []

  for (let i = 0; i < sellRequests.length; i++) {
    _buyingMoney.push(sellRequests[i].buyingMoney)
    _buyingQuantity.push(sellRequests[i].buyingQuantity)
    _productName.push(sellRequests[i].productName)
  }

  for (let i = 0; i < sellRequests.length; i++) {
    _sellRequest.push(
      <tr>
        <td>{i + 1}</td>
        <td>{_productName[i]}</td>
        <td>{_buyingMoney}</td>
        <td>{_buyingQuantity}</td>
      </tr>
    )
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
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
                    </tr>
                  </thead>
                  <tbody>{_buyRequest}</tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col>
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
                    </tr>
                  </thead>
                  <tbody>{_sellRequest}</tbody>
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
