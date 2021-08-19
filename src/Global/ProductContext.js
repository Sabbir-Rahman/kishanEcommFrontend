import React, { createContext, useState } from 'react'
import axios from 'axios'

import { useEffect } from 'react'

import fish from '../assets/img/fish.jpg'
import lychee from '../assets/img/lychee.jpg'
import mango from '../assets/img/mango.jpg'
import rice from '../assets/img/rice.jpg'

export const productContext = createContext()

// data fetch

const ProductContextProvider = (props) => {
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

  console.log(productss.data)

  //           "minOrder": 30,
  //           "isVerified": true,
  //           "isAvailableNow": false,
  //           "comments": [],
  //           "question": [],
  //           "_id": "611cac7ba55c5538ecf962ca",
  //           "seller_id": "611caa47a55c5538ecf96293",
  //           "name": "product811",
  //           "description": "This is a nice product",
  //           "unitName": "kg",
  //           "unitPrize": 12.5,
  //           "available": 70,
  //           "availableDate": "2021-11-23T00:00:00.000Z",
  //           "division": "D

  const [products] = useState([
    { id: 1, name: 'Salmon', price: 3000, image: fish, catagory: 'fish' },
    { id: 2, name: 'Rice', price: 60, image: rice, catagory: 'corp' },
    { id: 3, name: 'Mango', price: 80, image: mango, catagory: 'fruit' },
    { id: 4, name: 'Lychee', price: 120, image: lychee, catagory: 'fruit' },
    { id: 5, name: 'Salmon', price: 3000, image: fish, catagory: 'fish' },
    { id: 6, name: 'Rice', price: 60, image: rice, catagory: 'corp' },
    { id: 7, name: 'Mango', price: 80, image: mango, catagory: 'fruit' },
    { id: 8, name: 'Lychee', price: 120, image: lychee, catagory: 'fruit' },
    { id: 9, name: 'Salmon', price: 3000, image: fish, catagory: 'fish' },
    { id: 10, name: 'Rice', price: 60, image: rice, catagory: 'corp' },
    { id: 11, name: 'Mango', price: 80, image: mango, catagory: 'fruit' },
    { id: 12, name: 'Lychee', price: 120, image: lychee, catagory: 'fruit' },
    { id: 13, name: 'Salmon', price: 3000, image: fish, catagory: 'fish' },
    { id: 14, name: 'Rice', price: 60, image: rice, catagory: 'corp' },
    { id: 15, name: 'Mango', price: 80, image: mango, catagory: 'fruit' },
    { id: 16, name: 'Lychee', price: 120, image: lychee, catagory: 'fruit' },
  ])

  return (
    <productContext.Provider value={{ products: [...products] }}>
      {props.children}
    </productContext.Provider>
  )
}

export default ProductContextProvider
