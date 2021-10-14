import { Button, Card, Row, Col, Form } from 'react-bootstrap'
import Cart from './Cart'
import { useState } from 'react'
import { categoryFinder, divisionFinder, districts } from 'components/SearchCriterias'

const SearchBox = () => {

    let cart, cartLink

    cartLink = 'http://127.0.0.1:5000/product/view?category=' + localStorage.getItem('category')

    if (localStorage.getItem('search')) {
        cartLink += localStorage.getItem('search')
        localStorage.setItem('bibhag', localStorage.getItem('search'))
        localStorage.removeItem('search')
    }

    cart = Cart(cartLink)

    const [division, setDivision] = useState('')
    const [district, setDistrict] = useState('')
    const [category, setCategory] = useState('')

    function khojTheSearch(link, district) {
        if (district != '') {
            link = link + '&district=' + district
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
        <Card className='card-stats'>
            <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15 }}>
                ফিল্টার
            </Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group controlId='category'>
                        <Form.Label>ক্যাটাগরি</Form.Label>
                        <select
                            class='form-control'
                            as='select'
                            type='text'
                            placeholder='ক্যাটাগরি'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value=''></option>
                            <option value='শস্যওবীজ'>শস্য ও বীজ</option>
                            <option value='শাক-সবজি'>শাক-সবজি</option>
                            <option value='ফল'>ফল</option>
                            <option value='সারওকীটনাশক'>সার ও কীটনাশক</option>
                            <option value='পোল্ট্রিজাতপণ্য'>পোল্ট্রিজাত পণ্য</option>
                            <option value='মাংস'>মাংস</option>
                            <option value='মাছ'>মাছ</option>
                            <option value='অন্যান্য'>অন্যান্য</option>
                        </select>
                    </Form.Group>
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
                            khojTheSearch('&division=' + division, district)
                        }}
                    >
                        সার্চ করুন
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )

}

export default SearchBox