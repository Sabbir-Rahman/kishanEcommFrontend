import { useState, useEffect } from 'react'
import axios from 'axios'

function productData(param) {
  const [productss, setProduct] = useState([])

  const ShowProduct =
    param == null
      ? async () => {
          const token = localStorage.getItem('user')
          await axios
            .get('http://127.0.0.1:5000/product/view', {
              headers: { Authorization: token },
            })
            .then((res) => setProduct(res.data))
        }
      : async () => {
          const token = localStorage.getItem('user')
          await axios
            .get(param, {
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
  let s_id = localStorage.getItem('seller_id')
  s_id = s_id.replace(/['"]+/g, '')

  var products = []
  val.map((v) => {
    if (v.seller_id != s_id) {
      products.push({
        id: v._id,
        name: v.name,
        seller_id: v.seller_id,
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
    }
  })
  return products
}

export default productData
