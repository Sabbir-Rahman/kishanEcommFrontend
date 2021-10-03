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
  


  for (let i=0; i<val.length; i++){
    id.push(val[i]._id)
    name.push(val[i].name)
    seller_id.push(val[i].seller_id)
    description.push(val[i].description)
    category.push(val[i].catagory)
    subCategory.push(val[i].subCategory)
    image.push(val[i].image)
    image2.push(val[i].image2)
    image3.push(val[i].image3)
    unitName.push(val[i].unitName)
    unitPrize.push(val[i].unitPrize)
    bookingPercentage.push(val[i].bookingPercentage)
    available.push(val[i].available)
    minOrder.push(val[i].minOrder)
    rating.push(val[i].rating)
    availableDate.push(val[i].availableDate)
    division.push(val[i].division)
    district.push(val[i].district)
    upazilla.push(val[i].upazilla)
    isVerified.push(val[i].isVerified)
    isAvailableNow.push(val[i].isAvailableNow)
    rating.push(val[i].rating)
    comments.push(val[i].comments)
    question.push(val[i].question)
    timestamp.push(val[i].timestamp)
  }

  var products = []
  for(let i=0; i<val.length; i++){
    products.push({
      id: id[i],
      name: name[i],
      price: unitPrize[i], 
      unitName: unitName[i],
      iamge: image[i],
      category: category[i],
      minOrder: minOrder[i]})
  }

  return (
    <productContext.Provider value={{ products: [...products] }}>
      {props.children}
    </productContext.Provider>
  )
}

export default ProductContextProvider
