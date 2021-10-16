import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'
import post from 'api/PostAPI'
import Rating from 'react-rating'

function BuyRequset() {
  const [requests, setRequest] = useState([])

  const rating = (value) => {
    alert(value)
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
    if (status[i] == 'accepted') {
      sellrequset.push(
        <tr>
          <td>{i + 1}</td>
          <td>{productName[i]}</td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td><Button className='btn-round btn-fill' variant='info' disabled>{status[i]}</Button></td>
          <td>
            <Button
              size='sm'
              variant='warning'
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
          <td>{productName[i]}</td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td><Button className='btn-round btn-fill' variant='danger' disabled>{status[i]}</Button></td>
          <td>
            <Button
              size='sm'
              variant='warning'
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
          <td>{productName[i]}</td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td><Button className='btn-round btn-fill' variant='warning' disabled>{status[i]}</Button></td>
          <td></td>
        </tr>
      )
    } else if (status[i] == 'booked') {
      sellrequset.push(
        <tr>
          <td>{i + 1}</td>
          <td>{productName[i]}</td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td><Button className='btn-round btn-fill' variant='primary' disabled>{status[i]}</Button></td>
          <td></td>
        </tr>
      )
    } else {
      sellrequset.push(
        <tr>
          <td>{i + 1}</td>
          <td>{productName[i]}</td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td><Button className='btn-round btn-fill' variant='success' disabled>{status[i]}</Button></td>
          <td><Rating onClick={(rate) => rating(rate)}/></td>
        </tr>
      )
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
