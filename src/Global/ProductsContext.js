import React, {createContext, useState} from "react"

import fish from '../assets/img/fish.jpg'
import lychee from '../assets/img/lychee.jpg'
import mango from '../assets/img/mango.jpg'
import rice from '../assets/img/rice.jpg'

export const ProductsContext = createContext()


const ProductsContextProvider = (props) => {

    const [products] = useState([
        {id: 1, name: 'Salmon', price: 3000, image: fish, catagory: 'fish'},
        {id: 2, name: 'Rice', price: 60, image: rice, catagory: 'corp'},
        {id: 3, name: 'Mango', price: 80, image: mango, catagory: 'fruit'},
        {id: 4, name: 'Lychee', price: 120, image: lychee, catagory: 'fruit'},
        {id: 5, name: 'Salmon', price: 3000, image: fish, catagory: 'fish'},
        {id: 6, name: 'Rice', price: 60, image: rice, catagory: 'corp'},
        {id: 7, name: 'Mango', price: 80, image: mango, catagory: 'fruit'},
        {id: 8, name: 'Lychee', price: 120, image: lychee, catagory: 'fruit'},
        {id: 9, name: 'Salmon', price: 3000, image: fish, catagory: 'fish'},
        {id: 10, name: 'Rice', price: 60, image: rice, catagory: 'corp'},
        {id: 11, name: 'Mango', price: 80, image: mango, catagory: 'fruit'},
        {id: 12, name: 'Lychee', price: 120, image: lychee, catagory: 'fruit'},
        {id: 13, name: 'Salmon', price: 3000, image: fish, catagory: 'fish'},
        {id: 14, name: 'Rice', price: 60, image: rice, catagory: 'corp'},
        {id: 15, name: 'Mango', price: 80, image: mango, catagory: 'fruit'},
        {id: 16, name: 'Lychee', price: 120, image: lychee, catagory: 'fruit'}
    ])

    return (
        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider