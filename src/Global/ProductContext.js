import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const productContext = createContext()

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

  return (
    <productContext.Provider value={{ products: [...products] }}>
      {props.children}
    </productContext.Provider>
  )
}

export default ProductContextProvider
