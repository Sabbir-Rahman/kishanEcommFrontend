import React, { useContext, useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import axios from 'axios'

const Cart = () => {
  const [productss, setProduct] = useState([])

  const ShowProduct = async () => {
    const token = localStorage.getItem('user')
    await axios
      .get('http://127.0.0.1:5000/product/view', {
        headers: { Authorization: token },
      })
      .then((res) => setProduct(res.data))
  }

  useEffect(async () => {
    ShowProduct()
  }, [])

  let val = []
  if (productss.data != undefined) {
    val = productss.data
  }

  var products = []
  val.map((v) =>
    products.push({
      id: v._id,
      name: v.name,
      seller_id: v.seller_i,
      description: v.description,
      category: v.catagory,
      subCategory: v.subCategory,
      image: v.image,
      image2: v.image2,
      image3: v.image3,
      unitName: v.unitName,
      unitPrize: v.unitPrize,
      bookingPercentage: v.bookingPercentage,
      available: v.available,
      minOrder: v.minOrder,
      rating: v.rating,
      availableDate: v.availableDate,
      division: v.division,
      district: v.district,
      upazilla: v.upazilla,
      isVerified: v.isVerified,
      isAvailableNow: v.isAvailableNow,
      rating: v.rating,
      comments: v.comments,
      question: v.question,
      timestamp: v.timestamp,
    })
  )

  function redirect(productID) {
    localStorage.setItem('productID', productID)
    window.location.replace('/product')
  }

  return (
    <>
      {products.map((product) => (
        <div
          style={{
            marginLeft: '.3%',
            marginBottom: '.3%',
            marginRight: '.3%',
            marginTop: '.3%',
          }}
        >
          <Button
            variant='success'
            md='auto'
            style={{ marginLeft: '2%', marginRight: '2%' }}
            onClick={(e) => redirect(product.id)}
          >
            <Card>
              <Card.Header style={{ width: '200px', height: '180px' }}>
                <img
                  src={product.image}
                  alt='দুঃখিত! পণ্যের ছবি পাওয়া যায়নি'
                  style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                />
              </Card.Header>
              <Card.Body>
                <p
                  style={{
                    marginTop: '2%',
                    fontSize: '20px',
                    marginBottom: '0px',
                  }}
                >
                  {product.name}
                </p>
                <p
                  style={{
                    marginTop: '0px',
                    color: 'grey',
                    fontSize: '12px',
                    marginBottom: '0px',
                  }}
                >
                  সর্বনিম্ন অর্ডার {product.minOrder} {product.unitName}
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'green',
                    marginBottom: '0px',
                  }}
                >
                  মূল্য: {product.unitPrize} টাকা/{product.unitName}
                </p>
              </Card.Body>
            </Card>
          </Button>
        </div>
      ))}
    </>
  )
}

export default Cart
