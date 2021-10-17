import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SearchBox from 'components/SearchBox'
import Cart from "components/Cart/Cart"

const SearchProduct = () => {


    let cartLink = 'http://127.0.0.1:5000/product/view?'

    if (localStorage.getItem('search')) {
        cartLink += localStorage.getItem('search')
        localStorage.removeItem('search')
    }

    return (
        <>
            <Row style={{ marginLeft: '50px' }}></Row>
            <Row>
                <Col md='auto' style={{ marginLeft: '50px' }}>
                    <SearchBox />
                </Col>
                <Col md='9'>
                    <Row style={{ marginLeft: '7%' }}>{Cart(cartLink)}</Row>
                </Col>
            </Row>
        </>
    )
}

export default SearchProduct