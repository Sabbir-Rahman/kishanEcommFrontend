import React, {createContext, useState} from "react"

import fish from '../assets/img/fish.jpg'
import lychee from '../assets/img/lychee.jpg'
import mango from '../assets/img/mango.jpg'
import rice from '../assets/img/rice.jpg'

export const ProductsContext = createContext()


const ProductsContextProvider = (props) => {

    const [products] = useState([
        {id: 1, name: 'fish', price: 3000, image: fish, status: 'fresh'},
        {id: 2, name: 'rice', price: 60, image: rice, status: 'new'},
        {id: 3, name: 'mango', price: 80, image: mango, status: 'finishes soon'},
        {id: 4, name: 'lychee', price: 120, image: lychee, status: 'end of season'}
    ])

    return (
        <ProductsContextProvider.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContextProvider.Provider>
    )
}

export default ProductsContextProvider