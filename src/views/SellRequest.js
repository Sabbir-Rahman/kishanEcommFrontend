import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Sellrequset() {
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
      .get('http://127.0.0.1:5000/product/order/buyRequest', config)
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
    //console.log(product_id)

    const productID = {
      productId: product_id,
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

  let sellrequset = []
  for (let i = 0; i < soldProducts.length; i++) {
    if (status[i] == 'pending') {
      sellrequset.push(
        <tr>
          <td>{productName[i]}</td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td>{buyerName[i]}</td>
          <td>{status[i]}</td>
          <td>
            <Button
              variant='success'
              size='sm'
              value={productID[i]}
              onClick={(e) => approve(e.target.value)}
            >
              এপ্রুভ করুন
            </Button>
          </td>
          <td>
            <Button variant='danger' size='sm' value={productID[i]}>
              রিমুভ করুন
            </Button>
          </td>
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
              <th className='border-0'>পণ্যের নাম</th>
              <th className='border-0'>বুকিং মানি</th>
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
