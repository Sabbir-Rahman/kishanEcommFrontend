import React from 'react'
import { useState } from 'react'
import { Button, Card, Row, Col, Form } from 'react-bootstrap'
import Cart from "components/Cart"
import {categoryFinder, divisionFinder, districts} from 'components/SearchCriterias'

const SearchProduct = () => {

    let cart, cartLink, bibhag = localStorage.getItem('bibhag')
    
    cartLink = 'http://127.0.0.1:5000/product/view?category=' + localStorage.getItem('category')
    
    if (localStorage.getItem('division')) {
        cartLink += localStorage.getItem('division')
        localStorage.setItem('bibhag', localStorage.getItem('division'))
        localStorage.removeItem('division')

        if (localStorage.getItem('district')) {
            cartLink += localStorage.getItem('district')
            localStorage.setItem('zella', localStorage.getItem('district'))
            localStorage.removeItem('district')
        }
    }


    cart = Cart(cartLink)

    const [division, setDivision] = useState('')
    const [district, setDistrict] = useState('')
    
    function searchByDivision(link) {
        localStorage.setItem('division', link)
        console.log(localStorage.getItem('division'))
        window.location.reload()
    }

    return (
        <>
            <Row style={{ marginLeft: '50px' }}>
                <h2>পণ্য ক্যাটাগরি: {categoryFinder(localStorage.getItem('category'))} {divisionFinder(bibhag)} </h2>
            </Row>
            <Row>
                <Col md='auto' style={{ marginLeft: '50px' }}>
                    <Row>
                        <Card className='card-stats'>
                            <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15 }}>
                                ফিল্টার
                            </Card.Title>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId='division'>
                                        <Form.Label>বিভাগ</Form.Label>
                                        <select
                                            class='form-control'
                                            as='select'
                                            value={division}
                                            onChange={(e) => setDivision(e.target.value)}
                                        >
                                            <option value=''></option>
                                            <option value='Dhaka'>ঢাকা</option>
                                            <option value='Mymensingh'>ময়মনসিংহ</option>
                                            <option value='Sylhet'>সিলেট</option>
                                            <option value='Khulna'>খুলনা</option>
                                            <option value='Barishal'>বরিশাল</option>
                                            <option value='Rangpur'>রংপুর</option>
                                            <option value='Rajshahi'>রাজশাহী</option>
                                            <option value='Chattagram'>চট্টগ্রাম</option>
                                        </select>
                                    </Form.Group>
                                    <Form.Group controlId='division'>
                                        <Form.Label>জেলা</Form.Label>
                                        <select
                                            class='form-control'
                                            as='select'
                                            value={district}
                                            onChange={(e) => setDistrict(e.target.value)}
                                        >
                                            {districts(division)}
                                        </select>
                                    </Form.Group>
                                    <Button
                                        variant='success'
                                        style={{ marginBottom: 10, marginLeft: 110 }}
                                        onClick={(e) => {
                                            searchByDivision('&division=' + division)
                                        }}
                                    >
                                        সার্চ করুন
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col md='9'>
                    <Row style={{ marginLeft: '7%' }}>{cart}</Row>
                </Col>
            </Row>
        </>
    )
}

export default SearchProduct