import React from 'react'

import { Row, Col } from 'react-bootstrap'
import SearchBox from 'components/SearchBox'
import Cart from "components/Cart/Cart"

const SearchProduct = () => {

    return (
        <>
            <Row style={{ marginLeft: '50px' }}>
                <h2>পণ্য ক্যাটাগরি: </h2>
            </Row>
            <Row>
                <Col md='auto' style={{ marginLeft: '50px' }}>
                    <SearchBox/>
                </Col>
                <Col md='9'>
                    <Row style={{ marginLeft: '7%' }}>{Cart('http://127.0.0.1:5000/product/view?'+localStorage.getItem('search'))}</Row>
                </Col>
            </Row>
        </>
    )
}

export default SearchProduct