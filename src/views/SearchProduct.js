import React from 'react'
import { useState } from 'react'
import { Button, Card, Row, Col, Form } from 'react-bootstrap'
import Cart from "components/Cart"
import { categoryFinder, divisionFinder, districts } from 'components/SearchCriterias'

const SearchProduct = () => {

    let cart, cartLink, bibhag = localStorage.getItem('bibhag')

    cartLink = 'http://127.0.0.1:5000/product/view?category=' + localStorage.getItem('category')

    if (localStorage.getItem('search')) {
        cartLink += localStorage.getItem('search')
        localStorage.setItem('bibhag', localStorage.getItem('search'))
        localStorage.removeItem('search')
    }


    cart = Cart(cartLink)

    const [division, setDivision] = useState('')
    const [district, setDistrict] = useState('')

    function search(link, district) {
        if (district != '') {
            link = link+'&district='+district
            localStorage.setItem('search', link)
            console.log(localStorage.getItem('search'))
            window.location.reload()
        } else {
            localStorage.setItem('search', link)
            console.log(localStorage.getItem('search'))
            window.location.reload()
        }
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
                                            <option value='ঢাকা'>ঢাকা</option>
                                            <option value='ময়মনসিংহ'>ময়মনসিংহ</option>
                                            <option value='সিলেট'>সিলেট</option>
                                            <option value='খুলনা'>খুলনা</option>
                                            <option value='বরিশাল'>বরিশাল</option>
                                            <option value='রংপুর'>রংপুর</option>
                                            <option value='রাজশাহী'>রাজশাহী</option>
                                            <option value='চট্টগ্রাম'>চট্টগ্রাম</option>
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
                                            search('&division=' + division, district)
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