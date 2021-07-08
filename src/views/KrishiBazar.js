import React from 'react'
import KrishiBazarNavbar from 'components/Navbars/KrishiBazarNavbar'
import Banner from 'components/Banner'
import ProductsContextProvider from 'Global/ProductsContext'
import Products from 'components/Products'

const KrishiBazar = () => {
    return(
        <div>
            <div><KrishiBazarNavbar/></div>
            <div><Banner/></div>
            
            <ProductsContextProvider>
                <Products/>
            </ProductsContextProvider>
        </div>
    )
}

export default KrishiBazar
