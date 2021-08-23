import React from 'react'
import {
  Button,
  Card,
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'

function BuyRequset() {
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
      .get('http://127.0.0.1:5000/product/order/orderRequest', config)
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

  let soldProducts = []
  if (requests.data != undefined) {
    soldProducts = requests.data
  }

  let productID = []
  let bookingMoney = []
  let buyingMoney = []
  let buyingQuantity = []
  let buyingQuantityUnit = []
  let productName = []
  let status = []

  for (let i = 0; i < soldProducts.length; i++) {
    productID.push(soldProducts[i].product_id)
    bookingMoney.push(soldProducts[i].bookingMoney)
    buyingMoney.push(soldProducts[i].buyingMoney)
    buyingQuantity.push(soldProducts[i].buyingQuantity)
    buyingQuantityUnit.push(soldProducts[i].buyingQuantityUnit)
    productName.push(soldProducts[i].productName)
    status.push(soldProducts[i].status)
  }

  let sellrequset = []
  for (let i = 0; i < soldProducts.length; i++) {
    sellrequset.push(
      <Col style={{background: 'rgba(181, 218, 164, .3)', borderColor: 'white'}}>
        <table>
          <th><h3 style={{ marginRight: '20px' }}>{productName[i]}</h3></th>
          <th style={{ color: 'gray', marginLeft: '5px' }}>আইডি: {productID[i]}</th>
        </table>
        <table>
          <th><h5>বুকিং মানি:</h5></th>
          <th><h5 style={{ color: 'green', marginLeft: '10px', font: 'message-box'}}>{bookingMoney[i]}</h5></th>
          <th><h5 style={{ marginLeft: '30px', font: 'message-box' }}>বুকিং মানি:</h5></th>
          <th><h5 style={{ color: 'green', marginLeft: '10px', font: 'message-box'}}>{bookingMoney[i]} টাকা</h5></th>
          <th><h5 style={{ marginLeft: '30px', font: 'message-box' }}>মোট মূল্য:</h5></th>
          <th><h5 style={{ color: 'green', marginLeft: '10px', font: 'message-box'}}>{buyingMoney[i]} টাকা</h5></th>
        </table>
        <table>
          <th><h5>পরিমাণ:</h5></th>
          <th><h5 style={{ color: 'green', marginLeft: '10px', font: 'message-box'}}>{buyingQuantity[i]} {buyingQuantityUnit[i]}</h5></th>
          <th><h5 style={{ marginLeft: '30px', font: 'message-box' }}>স্ট্যাটাস:</h5></th>
          <th><h5 style={{ color: 'green', marginLeft: '10px', font: 'message-box'}}>{status[i]}</h5></th>
        </table>
        <Row style={{ background: "white", height: "15px" }}></Row>
      </Col>
    )
  }

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as='h4'>পণ্য ক্রয় অনুরোধ</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                {sellrequset}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default BuyRequset