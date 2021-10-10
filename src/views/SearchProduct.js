import React from 'react'
import { useState } from 'react'
import { Button, Card, Row, Col, Form } from 'react-bootstrap'
import Cart from "components/Cart"

const SearchProduct = () => {
    const [category, setCategory] = useState('')
    const [division, setDivision] = useState('')
    //const cart = Cart(localStorage.getItem('searchLink'))
    localStorage.removeItem('searchLink')

    function searchFunction(link) {
        localStorage.setItem('searchLink', link)
        console.log(localStorage.getItem('searchLink'))
        window.location.reload()
    }

    const cart = Cart('http://127.0.0.1:5000/product/view?category=' + localStorage.getItem('category'))
    return (
        <>
            <Row>
                <Col>
                    <Card className='card-stats'>
                        <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15 }}>
                            বিভাগ
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
                                <Button
                                    variant='success'
                                    style={{ marginBottom: 10, marginLeft: 110 }}
                                    onClick={(e) => {
                                        let temp =
                                            'http://127.0.0.1:5000/product/view?division=' + division
                                        //console.log(temp)
                                        searchFunction(temp)
                                    }}
                                >
                                    সার্চ করুন
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='card-stats'>
                        <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15 }}>
                            ক্যাটাগরি
                        </Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId='category'>
                                    <Form.Label>ক্যাটাগরি</Form.Label>
                                    <select
                                        class='form-control'
                                        as='select'
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value=''></option>
                                        <option value='corps'>শস্য</option>
                                        <option value='vegetables'>শাক-সবজি</option>
                                        <option value='fruit'>ফল</option>
                                        <option value='pesticides'>সার ও কীটনাশক</option>
                                        <option value='poultry'>পোল্ট্রিজাত পণ্য</option>
                                        <option value='meat'>মাংস</option>
                                        <option value='fish'>মাছ</option>
                                        <option value='others'>অন্যান্য</option>
                                    </select>
                                </Form.Group>
                                <Button
                                    variant='success'
                                    style={{ marginBottom: 10, marginLeft: 110 }}
                                    onClick={(e) => {
                                        searchFunction('http://127.0.0.1:5000/product/view?category=' + category)
                                    }}
                                >
                                    সার্চ করুন
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                {cart}
            </Row>

        </>
    )
}

export default SearchProduct