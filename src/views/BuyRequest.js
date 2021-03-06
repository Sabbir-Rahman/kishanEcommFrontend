import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'
import post from 'api/PostAPI'
import Rating from 'react-rating'

function BuyRequset() {
  function viewProduct(productID) {
    localStorage.setItem('productID', productID)
    window.location.replace('/product')
  }

  const [requests, setRequest] = useState([])

  const DoRating = (value, req_ID) => {
    const rate = {
      orderRequestId: req_ID,
      rating: value,
    }
    post(
      rate,
      'রেটিং দেয়া সম্পন্ন হয়েছে',
      'http://127.0.0.1:5000/product/order/rating'
    )
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
      .get('http://127.0.0.1:5000/product/order/orderRequest', config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        setRequest(res.data)
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  const BookKorun = async (product_id) => {
    const token = localStorage.getItem('user')
    const _token = token.split('"').join('')
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }
    axios
      .get(
        'http://127.0.0.1:5000/product/ssl-commerze/payment?productId=' +
          product_id,
        config
      )
      .then((res) => {
        window.open(res.data.url, '_blank')
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  const productReceived = async (id) => {
    const productID = {
      productId: id,
    }
    post(
      productID,
      'পন্য সফলভাবে বুঝে পেয়েছেন',
      'http://127.0.0.1:5000/product/order/complete'
    )
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
  let RequestID = []
  let rating = []

  for (let i = 0; i < soldProducts.length; i++) {
    rating.push(soldProducts[i].rating)
    RequestID.push(soldProducts[i]._id)
    productID.push(soldProducts[i].product_id)
    bookingMoney.push(soldProducts[i].bookingMoney)
    buyingMoney.push(soldProducts[i].buyingMoney)
    buyingQuantity.push(soldProducts[i].buyingQuantity)
    buyingQuantityUnit.push(soldProducts[i].buyingQuantityUnit)
    productName.push(soldProducts[i].productName)
    status.push(soldProducts[i].status)
  }

  console.log(RequestID)

  let sellrequset = []
  for (let i = 0; i < soldProducts.length; i++) {
    if (status[i] == 'accepted') {
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
          <td>
            <Button
              className='btn-round btn-fill'
              style={{ width: '100px' }}
              size='sm'
              variant='info'
              disabled
            >
              একসেপ্টেড
            </Button>
          </td>
          <td>
            <Button
              size='sm'
              variant='secondary'
              className='btn-round btn-fill'
              value={productID[i]}
              onClick={(e) => BookKorun(e.target.value)}
            >
              বুক করুন
            </Button>
          </td>
        </tr>
      )
    } else if (status[i] == 'paid') {
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
          <td>
            <Button
              className='btn-round btn-fill'
              style={{ width: '100px' }}
              size='sm'
              variant='danger'
              disabled
            >
              পেইড
            </Button>
          </td>
          <td>
            <Button
              size='sm'
              variant='warning'
              className='btn-round btn-fill'
              value={productID[i]}
              onClick={(e) => productReceived(e.target.value)}
            >
              পণ্য বুঝে পেয়েছি
            </Button>
          </td>
        </tr>
      )
    } else if (status[i] == 'pending') {
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
          <td>
            <Button
              className='btn-round btn-fill'
              style={{ width: '100px' }}
              size='sm'
              variant='warning'
              disabled
            >
              পেন্ডিং
            </Button>
          </td>
          <td></td>
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
          <td>
            <Button
              className='btn-round btn-fill'
              style={{ width: '100px' }}
              size='sm'
              variant='primary'
              disabled
            >
              বুকড
            </Button>
          </td>
          <td></td>
        </tr>
      )
    } else if (status[i] == 'cancel') {
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
          <td>
            <Button
              className='btn-round btn-fill'
              style={{ width: '100px' }}
              size='sm'
              variant='dark'
              disabled
            >
              বাতিলকৃত
            </Button>
          </td>
          <td></td>
        </tr>
      )
    } else {
      if (rating[i] != 0) {
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
            <td>
              <Button
                className='btn-round btn-fill'
                style={{ width: '100px' }}
                size='sm'
                variant='success'
                disabled
              >
                সম্পন্ন
              </Button>
            </td>
            <td>
              <Rating disabled placeholderRating={rating[i]} readonly />
            </td>
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
            <td>
              <Button
                className='btn-round btn-fill'
                style={{ width: '100px' }}
                size='sm'
                variant='success'
                disabled
              >
                সম্পন্ন
              </Button>
            </td>
            <td>
              <Rating onClick={(rate) => DoRating(rate, RequestID[i])} />
            </td>
          </tr>
        )
      }
    }
  }

  return (
    <Card className='strpied-tabled-with-hover'>
      <Card.Header>
        <Card.Title as='h4'>পণ্য ক্রয় অনুরোধ</Card.Title>
        <p className='card-category'>
          নিম্নের পণ্যসমূহ ক্রয়ের জন্য অনুরোধ করা হয়েছে
        </p>
      </Card.Header>
      <Card.Body className='table-full-width table-responsive px-0'>
        <Table className='table-hover table-striped'>
          <thead>
            <tr>
              <th className='border-0'>ক্রমিক</th>
              <th className='border-0'>পণ্যের নাম</th>
              <th className='border-0'>বুকিং মানি</th>
              <th className='border-0'>মোট মূল্য</th>
              <th className='border-0'>পরিমাণ</th>
              <th className='border-0'>স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody>{sellrequset}</tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default BuyRequset
