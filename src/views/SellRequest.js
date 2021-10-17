import React from 'react'
import { Button, Card, Table, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'
import post from 'api/PostAPI'

function Sellrequset() {
  const [requests, setRequest] = useState([])
  const [cancelMSG, setCancelMSG] = useState('')

  function viewProduct(productID) {
    localStorage.setItem('productID', productID)
    window.location.replace('/product')
  }

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
      .get('http://127.0.0.1:5000/product/order/buyRequest', config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        setRequest(res.data)
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  const cancel = (product_id, msg) => {
    const productID = {
      productId: product_id,
      message: msg,
    }
    post(
      productID,
      'পন্য সফলভাবে ক্যান্সেল করা হয়েছে',
      'http://127.0.0.1:5000/product/order/cancel/'
    )
  }

  useEffect(async () => {
    ShowRequest()
  }, [])

  let soldProducts = []
  if (requests.data != undefined) {
    soldProducts = requests.data
  }

  let productImage = []
  let productID = []
  let bookingMoney = []
  let buyerName = []
  let buyingMoney = []
  let buyingQuantity = []
  let buyingQuantityUnit = []
  let productName = []
  let status = []

  for (let i = 0; i < soldProducts.length; i++) {
    productImage.push(soldProducts[i].image)
    productID.push(soldProducts[i].product_id)
    bookingMoney.push(soldProducts[i].bookingMoney)
    buyerName.push(soldProducts[i].buyerName)
    buyingMoney.push(soldProducts[i].buyingMoney)
    buyingQuantity.push(soldProducts[i].buyingQuantity)
    buyingQuantityUnit.push(soldProducts[i].buyingQuantityUnit)
    productName.push(soldProducts[i].productName)
    status.push(soldProducts[i].status)
  }

  const approve = (product_id) => {
    const productID = {
      productId: product_id,
    }
    const token = localStorage.getItem('user')
    const _token = token.split('"').join('')
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }
    axios
      .post('http://127.0.0.1:5000/product/order/accept', productID, config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        alert('Product accepted successfully')
        window.location.reload()
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  const paymentDone = async (product_id) => {
    const productID = {
      productId: product_id,
    }
    const token = localStorage.getItem('user')
    const _token = token.split('"').join('')
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }
    axios
      .post('http://127.0.0.1:5000/product/order/paid', productID, config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        alert('Product payment successful')
        window.location.reload()
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  let sellrequset = []
  for (let i = 0; i < soldProducts.length; i++) {
    if (status[i] == 'pending') {
      sellrequset.push(
        <tr>
          <td>{i + 1}</td>
          <td>
            <Button
              style={{
                background: 'none',
                color: 'inherit',
                border: 'none',
                padding: '0',
                font: 'inherit',
                cursor: 'pointer',
                outline: 'inherit',
              }}
              onClick={(e) => viewProduct(productID[i])}
            >
              {productName[i]}
            </Button>
          </td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td>{buyerName[i]}</td>
          <td>
            <Button
              className='btn-round btn-fill'
              size='sm'
              variant='warning'
              style={{ width: '100px' }}
              disabled
            >
              {status[i]}
            </Button>
          </td>
          <td>
            <Row>
              <Button
                style={{ width: '250px' }}
                variant='success'
                size='sm'
                value={productID[i]}
                className='btn-round btn-fill'
                onClick={(e) => approve(e.target.value)}
              >
                এপ্রুভ করুন
              </Button>
            </Row>
            <Row>
              <Form style={{ width: '150px' }}>
                <Form.Control
                  type='text'
                  size='sm'
                  placeholder='ক্যান্সেল বার্তা'
                  value={cancelMSG}
                  onChange={(e) => setCancelMSG(e.target.value)}
                />
              </Form>
              <Button
                variant='danger'
                style={{ width: '100px' }}
                className='btn-round btn-fill'
                size='sm'
                onClick={(e) => cancel(productID[i], cancelMSG)}
              >
                রিমুভ করুন
              </Button>
            </Row>
          </td>
        </tr>
      )
    } else if (status[i] == 'booked') {
      sellrequset.push(
        <tr>
          <td>{i + 1}</td>
          <td>
            <Button
              style={{
                background: 'none',
                color: 'inherit',
                border: 'none',
                padding: '0',
                font: 'inherit',
                cursor: 'pointer',
                outline: 'inherit',
              }}
              onClick={(e) => viewProduct(productID[i])}
            >
              {productName[i]}
            </Button>
          </td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td>{buyerName[i]}</td>
          <td>
            <Button
              className='btn-round btn-fill'
              style={{ width: '100px' }}
              size='sm'
              variant='primary'
              disabled
            >
              {status[i]}
            </Button>
          </td>
          <td>
            <Button
              variant='warning'
              size='sm'
              value={productID[i]}
              className='btn-round btn-fill'
              onClick={(e) => paymentDone(e.target.value)}
            >
              মূল্য পরিশোধিত হয়েছে
            </Button>
          </td>
        </tr>
      )
    } else if (status[i] == 'accepted') {
      sellrequset.push(
        <tr>
          <td>{i + 1}</td>
          <td>
            <Button
              style={{
                background: 'none',
                color: 'inherit',
                border: 'none',
                padding: '0',
                font: 'inherit',
                cursor: 'pointer',
                outline: 'inherit',
              }}
              onClick={(e) => viewProduct(productID[i])}
            >
              {productName[i]}
            </Button>
          </td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td>{buyerName[i]}</td>
          <td>
            <Button
              className='btn-round btn-fill'
              style={{ width: '100px' }}
              size='sm'
              variant='info'
              disabled
            >
              {status[i]}
            </Button>
          </td>
          <td></td>
        </tr>
      )
    } else {
      sellrequset.push(
        <tr>
          <td>{i + 1}</td>
          <td>
            <Button
              style={{
                background: 'none',
                color: 'inherit',
                border: 'none',
                padding: '0',
                font: 'inherit',
                cursor: 'pointer',
                outline: 'inherit',
              }}
              onClick={(e) => viewProduct(productID[i])}
            >
              {productName[i]}
            </Button>
          </td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td>{buyerName[i]}</td>
          <td>
            <Button
              className='btn-round btn-fill'
              style={{ width: '100px' }}
              size='sm'
              variant='success'
              disabled
            >
              {status[i]}
            </Button>
          </td>
          <td></td>
        </tr>
      )
    }
  }

  return (
    <Card className='strpied-tabled-with-hover'>
      <Card.Header>
        <Card.Title as='h4'>পণ্য বিক্রয় অনুরোধ</Card.Title>
        <p className='card-category'>
          নিম্নের পণ্যসমূহ বিক্রয়ের জন্য অনুরোধ করা হয়েছে
        </p>
      </Card.Header>
      <Card.Body className='table-full-width table-responsive px-0'>
        <Table className='table-hover table-striped'>
          <thead>
            <tr>
              <th className='border-0'>ক্রমিক নম্বর</th>
              <th className='border-0'>পণ্যের নাম</th>
              <th className='border-0'>বুকিং মুল্য</th>
              <th className='border-0'>মোট মূল্য</th>
              <th className='border-0'>পরিমাণ</th>
              <th className='border-0'>ক্রেতার নাম</th>
              <th className='border-0'>স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody>{sellrequset}</tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default Sellrequset
