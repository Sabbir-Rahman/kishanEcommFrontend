import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import SearchBox from 'components/SearchBox'
import Cart from "components/Cart/Cart"
import { useEffect, useState } from 'react'
import axios from 'axios'

const SearchProduct = () => {

    const [products, setProducts] = useState([])
    const [text, setText] = useState('')
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        const loadProducts = async () => {
            const response = await axios.get('http://127.0.0.1:5000/product/view')
            console.log(response.data)
            setProducts(response.data.data)
        }

        loadProducts()
    }, [])


    const onSuggestionHandler = (text) => {
        setText(text)
        console.log(text, 'rafi')
        setSuggestions([])
    }

    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = products.filter(product => {
                const regex = new RegExp(`${text}`, "gi")
                return product.name.match(regex)
            })
        }
        console.log(matches)
        setSuggestions(matches)
        setText(text)
    }

    function khojTheSearch(text) {
        alert(text)
        console.log(text)
        // let search = 'isVerified=true'
        // localStorage.setItem('search', search)
        // window.location.replace('/search')
    }

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
                    <Row style={{ marginLeft: '7%' }}>
                        <Col>
                            <Form>
                                <Form.Group>
                                    <Form.Control type="text" style={{ marginTop: 10 }}
                                        onChange={e => onChangeHandler(e.target.value)}
                                        value={text}
                                        onBlur={() => {
                                            setTimeout(() => {
                                                setSuggestions([])
                                            }, 100)
                                        }}>
                                        
                                    </Form.Control>
                                    {suggestions && suggestions.map((suggestion, i) =>
                                        <div key={i}
                                            onClick={() => onSuggestionHandler(suggestion.name)}
                                        >{suggestion.name}</div>
                                    )}
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Button
                                variant='success'
                                style={{ marginBottom: 10, marginLeft: 110 }}
                                onClick={(e) => {
                                    khojTheSearch({ text })
                                }}
                            >
                                সার্চ করুন
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{ marginLeft: '7%' }}>{Cart(cartLink)}</Row>
                </Col>
            </Row>
        </>
    )
}

export default SearchProduct