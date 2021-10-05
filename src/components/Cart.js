import React, { useContext } from 'react'
import { productContext } from 'Global/ProductContext'
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Form,
  ButtonGroup,
} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import bgImage from 'assets/img/bgKrishiBazar.jpg'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Product from './Product'

const Cart = () => {
  function Redirection() {
    // localStorage.setItem('productID', id)
    console.log('Hi')
    return <></>
  }

  function anotherOne() {
    console.log('Hello')
  }

  let id = []
  let seller_id = []
  let name = []
  let description = []
  let category = []
  let subCategory = []
  let image = []
  let image2 = []
  let image3 = []
  let unitName = []
  let unitPrize = []
  let bookingPercentage = []
  let available = []
  let minOrder = []
  let availableDate = []
  let division = []
  let district = []
  let upazilla = []
  let isVerified = []
  let isAvailableNow = []
  let rating = []
  let comments = []
  let question = []
  let timestamp = []

  const { products } = useContext(productContext)

  products.map(
    (product) => (
      id.push(product.id),
      name.push(product.name),
      seller_id.push(product.seller_id),
      description.push(product.description),
      category.push(product.catagory),
      subCategory.push(product.subCategory),
      image.push(product.image),
      image2.push(product.image2),
      image3.push(product.image3),
      unitName.push(product.unitName),
      unitPrize.push(product.unitPrize),
      bookingPercentage.push(product.bookingPercentage),
      available.push(product.available),
      minOrder.push(product.minOrder),
      rating.push(product.rating),
      availableDate.push(product.availableDate),
      division.push(product.division),
      district.push(product.district),
      upazilla.push(product.upazilla),
      isVerified.push(product.isVerified),
      isAvailableNow.push(product.isAvailableNow),
      rating.push(product.rating),
      comments.push(product.comments),
      question.push(product.question),
      timestamp.push(product.timestamp)
    )
  )

  var cart = []
  for (let i = 0; i < id.length; i++) {
    cart.push(
      <Card
        key={id[i]}
        style={{
          marginRight: '5px',
          marginLeft: '5px',
          overflow: 'hidden',
        }}
      >
        <Card.Header style={{ width: '220px', height: '200px' }}>
          <img
            src={image[i]}
            alt='দুঃখিত! পণ্যের ছবি পাওয়া যায়নি'
            style={{
              background: 'white',
              width: '220px',
              height: '200px',
              overflow: 'hidden',
            }}
          />
        </Card.Header>
        <Card.Body>
          <p
            style={{ marginTop: '10px', fontSize: '20px', marginBottom: '0px' }}
          >
            {name[i]}
          </p>
          <p
            style={{
              marginTop: '0px',
              color: 'grey',
              fontSize: '12px',
              marginBottom: '0px',
            }}
          >
            সর্বনিম্ন অর্ডার {minOrder[i]} {unitName[i]}
          </p>
          <p style={{ fontSize: '15px', color: 'green', marginBottom: '0px' }}>
            মূল্য: {unitPrize[i]} টাকা/{unitName[i]}
          </p>
        </Card.Body>
        <Link to='/product'>
          <Row>
            <div className='proButton'>
              <button onClick={Redirection}>পণ্য দেখুন</button>
            </div>
          </Row>
        </Link>
      </Card>
    )
  }

  return <>{cart}</>
}

export default Cart
