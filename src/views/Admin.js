import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Admin() {
  const approve = (product_id) => {
    const productID = {
      productId: product_id,
      isVerified: true,
      message: 'Your product is verified. Thank you',
    }
    const token = localStorage.getItem('user')
    const _token = token.split('"').join('')
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
        window.location.reload()
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

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
  console.log(val)

  let id = []
  let seller_id = []
  let name = []
  let description = []
  let category = []
  let image = []
  let unitName = []
  let unitPrize = []
  let bookingPercentage = []
  let minOrder = []
  let division = []
  let district = []
  let upazilla = []
  let isVerified = []

  for (let i = 0; i < val.length; i++) {
    id.push(val[i]._id)
    name.push(val[i].name)
    seller_id.push(val[i].seller_id)
    description.push(val[i].description)
    category.push(val[i].catagory)
    image.push(val[i].image)
    unitName.push(val[i].unitName)
    unitPrize.push(val[i].unitPrize)
    bookingPercentage.push(val[i].bookingPercentage)
    minOrder.push(val[i].minOrder)
    division.push(val[i].division)
    district.push(val[i].district)
    upazilla.push(val[i].upazilla)
  }

  let unverifiedRequests = []
  for (let i = 0; i < val.length; i++) {
    unverifiedRequests.push(
      <tr>
        <td>{i + 1}</td>
        <td>{name[i]}</td>
        <td>{seller_id[i]}</td>
        <td>{description[i]}</td>
        <td>{category[i]}</td>
        <td>
          {unitPrize[i]} টাকা/{unitName[i]}
          <br />
          {bookingPercentage[i]}% বুকিং চার্জ
        </td>
        <td>{minOrder[i]}</td>
        <td>
          বিভাগ: {division[i]}
          <br />
          জেলা: {district[i]}
        </td>
        <td>{isVerified[i]}</td>
        <td>
          <Button
            variant='success'
            size='sm'
            value={id[i]}
            onClick={(e) => approve(e.target.value)}
          >
            এপ্রুভ করুন
          </Button>
          <br />
          <br />
          <Button variant='danger' size='sm' value={id[i]}>
            রিমুভ করুন
          </Button>
        </td>
      </tr>
    )
  }

  return (
    <Card className='strpied-tabled-with-hover'>
      <Card.Header>
        <Card.Title as='h4'>পণ্য যোগ</Card.Title>
        <p className='card-category'>
          নিম্নের পণ্যসমূহ যোগ করার জন্য অনুরোধ করা হয়েছে
        </p>
      </Card.Header>
      <Card.Body className='table-full-width table-responsive px-0'>
        <Table className='table-hover table-striped'>
          <thead>
            <tr>
              <th className='border-0'>ক্রমিক</th>
              <th className='border-0'>পণ্যের নাম</th>
              <th className='border-0'>বিক্রেতা</th>
              <th className='border-0'>বিবরণ</th>
              <th className='border-0'>ক্যাটাগরি</th>
              <th className='border-0'>মূল্য</th>
              <th className='border-0'>সর্বনিম্ন অর্ডার</th>
              <th className='border-0'>ঠিকানা</th>
            </tr>
          </thead>
          <tbody>{unverifiedRequests}</tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default Admin
