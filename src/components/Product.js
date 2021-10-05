import React, { useContext } from 'react'
import { productContext } from 'Global/ProductContext'
import {
    Button,
    Card,
    Container,
    Row,
    Col,
    Form,
} from 'react-bootstrap'

const Product = () => {

    let id = []
    let seller_id = []
    let name = []
    let description = []
    let category = []
    let subCategory = []
    let image = []
    let image2 = []
    let image3 = []
    let unitName = []
    let unitPrize = []
    let bookingPercentage = []
    let available = []
    let minOrder = []
    let availableDate = []
    let division = []
    let district = []
    let upazilla = []
    let isVerified = []
    let isAvailableNow = []
    let rating = []
    let comments = []
    let question = []
    let timestamp = []

    const {products} = useContext(productContext)
    
    products.map((product)=>(
        id.push(product.id),
        name.push(product.name),
        seller_id.push(product.seller_id),
        description.push(product.description),
        category.push(product.catagory),
        subCategory.push(product.subCategory),
        image.push(product.image),
        image2.push(product.image2),
        image3.push(product.image3),
        unitName.push(product.unitName),
        unitPrize.push(product.unitPrize),
        bookingPercentage.push(product.bookingPercentage),
        available.push(product.available),
        minOrder.push(product.minOrder),
        rating.push(product.rating),
        availableDate.push(product.availableDate),
        division.push(product.division),
        district.push(product.district),
        upazilla.push(product.upazilla),
        isVerified.push(product.isVerified),
        isAvailableNow.push(product.isAvailableNow),
        rating.push(product.rating),
        comments.push(product.comments),
        question.push(product.question),
        timestamp.push(product.timestamp)
    ))
    
    const num = localStorage.getItem('productID')
    localStorage.removeItem('productID')

    // for (let i=0; i<id.length; i++){
    //     if(props.value = id[i]){
    //         num = i
    //     }
    // }


    return (
        <>
            <div className='rna-container' style={{ marginTop: '5px' }}></div>
            <Container fluid>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md='6'>
                                <img
                                    // src={bgImage}
                                    alt='পণ্যের ছবি পাওয়া যায়নি'
                                    style={{
                                        background: 'white',
                                        width: '100%',
                                        height: '100%',
                                        overflow: 'hidden',
                                    }}
                                />
                            </Col>
                            <Col md='6'>
                                <table>
                                    <th>
                                        <h3 style={{ marginRight: '50px' }}>{name[num]}</h3>
                                    </th>
                                    <th style={{ color: 'gray', marginLeft: '5px' }}>
                                        {' '}
                                        আইডি: {num}{' '}
                                    </th>
                                </table>
                                <table>
                                    <th>
                                        <h5
                                            style={{
                                                color: 'green',
                                                marginRight: '50px',
                                                font: 'message-box',
                                            }}
                                        >
                                            {unitPrize[num]} টাকা/{unitName[num]}
                                        </h5>
                                    </th>
                                    <th>
                                        <h5
                                            style={{
                                                color: 'green',
                                                marginRight: '50px',
                                                font: 'message-box',
                                            }}
                                        >
                                            {bookingPercentage[num]}% বুকিং চার্জ
                                        </h5>{' '}
                                    </th>
                                </table>
                                <table>
                                    <th>
                                        <h5>সর্বনিম্ন অর্ডার:</h5>
                                    </th>
                                    <th>
                                        <h5
                                            style={{
                                                color: 'green',
                                                marginLeft: '10px',
                                                font: 'message-box',
                                            }}
                                        >
                                            {minOrder[num]} {unitName[num]}
                                        </h5>
                                    </th>
                                    <th>
                                        <h5 style={{ marginLeft: '30px', font: 'message-box' }}>
                                            মজুদ:
                                        </h5>
                                    </th>
                                    <th>
                                        <h5
                                            style={{
                                                color: 'green',
                                                marginLeft: '10px',
                                                font: 'message-box',
                                            }}
                                        >
                                            {available[num]} {unitName[num]}
                                        </h5>
                                    </th>
                                    <th>
                                        <h5 style={{ marginLeft: '30px', font: 'message-box' }}>
                                            তারিখ:
                                        </h5>
                                    </th>
                                    <th>
                                        <h5
                                            style={{
                                                color: 'green',
                                                marginLeft: '10px',
                                                font: 'message-box',
                                            }}
                                        >
                                            {availableDate[num]}
                                        </h5>
                                    </th>
                                </table>
                                <table>
                                    <th>
                                        <h5 style={{ marginRight: '30px', font: 'status-bar' }}>
                                            বিভাগঃ {division[num]}
                                        </h5>
                                    </th>
                                    <th>
                                        <h5 style={{ marginRight: '30px', font: 'status-bar' }}>
                                            জেলাঃ {district[num]}
                                        </h5>
                                    </th>
                                    <th>
                                        <h5 style={{ marginRight: '30px', font: 'status-bar' }}>
                                            উপজেলাঃ {upazilla[num]}
                                        </h5>
                                    </th>
                                </table>
                                <p>
                                    {description[num]}
                                </p>
                                <table>
                                    <th>
                                        <h5 style={{ marginRight: '20px', font: 'message-box' }}>
                                            বিক্রেতা:
                                        </h5>
                                    </th>
                                    <th>
                                        <h5
                                            style={{
                                                color: 'green',
                                                marginRight: '10px',
                                                font: 'message-box',
                                            }}
                                        >
                                            {seller_id[num]}
                                        </h5>{' '}
                                    </th>
                                    <th>
                                        <h5 style={{ color: 'gray', font: 'status-bar' }}>
                                            আড়তদার
                                        </h5>{' '}
                                    </th>
                                </table>
                                <Form>
                                    <table>
                                        <th>
                                            <Form.Control
                                                type='number'
                                                name='qty'
                                                placeholder='পণ্যের পরিমাণ'
                                            />
                                        </th>
                                        <th>
                                            <Button variant='success' style={{ marginLeft: '20px' }}>
                                                ক্রয় অনুরোধ প্রেরণ করুন
                                            </Button>
                                        </th>
                                    </table>
                                </Form>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Product