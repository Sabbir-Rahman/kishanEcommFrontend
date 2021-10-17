import { Card, Button, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { districts } from 'components/SearchCriterias'
import axios from 'axios'

const SearchBox = () => {

    const [division, setDivision] = useState('')
    const [district, setDistrict] = useState('')
    const [category, setCategory] = useState('')
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
        alert('rafi')
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

    let search = 'isVerified=true'

    function khojTheSearch() {
        if (category != '') {
            search += '&category=' + category
        }
        if (division != '') {
            search += '&division=' + division
        }
        if (district != '') {
            search += '&district=' + district
        }
        localStorage.setItem('search', search)
        window.location.replace('/search')
    }

    return (
        <Card className='card-stats'>
            <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15 }}>
                ফিল্টার
            </Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group controlId='name'>
                    <Form.Label>পণ্যের নাম</Form.Label>
                        <Form.Control type="text" style={{ marginTop: 10 }}
                            onChange={(e) => onChangeHandler(e.target.value)}
                            value={text}
                            onBlur={() => {
                                setTimeout(() => {
                                    setSuggestions([])
                                }, 100)
                            }}>

                        </Form.Control>
                        {suggestions && suggestions.map((suggestion, i) =>
                            <>
                                <br />
                                <Button key={i}
                                    style={{
                                        background: 'none',
                                        color: 'inherit',
                                        border: 'none',
                                        padding: '0',
                                        font: 'inherit',
                                        cursor: 'pointer',
                                        outline: 'inherit',
                                    }}
                                    onClick={(e) => { onSuggestionHandler(suggestion.name) }}
                                >{suggestion.name}</Button>
                            </>
                        )}
                    </Form.Group>
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
                        className='btn-round btn-fill'
                        style={{ marginBottom: 10, marginLeft: 110 }}
                        onClick={(e) => {
                            khojTheSearch()
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