import React, { useContext } from 'react'
import { productContext } from 'Global/ProductContext'
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Form,
  ButtonGroup
} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import bgImage from 'assets/img/bgKrishiBazar.jpg'
import { Link } from "react-router-dom"

const Cart = () => {

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

  const { products } = useContext(productContext)

  products.map((product) => (
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

  var cart = []
  for (let i = 0; i < id.length; i++) {
    cart.push(
      <Card
        key={id[i]}
        style={{
          marginRight: '5px',
          marginLeft: '5px',
          overflow: 'hidden',
        }}
      >
        <Card.Header style={{ width: '220px', height: '200px' }}>
          <img
            src={image[i]}
            alt='দুঃখিত! পণ্যের ছবি পাওয়া যায়নি'
            style={{
              background: 'white',
              width: '220px',
              height: '200px',
              overflow: 'hidden',
            }}
          />
        </Card.Header>
        <Card.Body>
          <p style={{ marginTop: '10px', fontSize: '20px', marginBottom: "0px" }}>
            {name[i]}
          </p>
          <p
            style={{
              marginTop: '0px',
              color: 'grey',
              fontSize: '12px',
              marginBottom: "0px"
            }}
          >
            সর্বনিম্ন অর্ডার {minOrder[i]} {unitName[i]}
          </p>
          <p style={{ fontSize: '15px', color: 'green', marginBottom: "0px" }}>
            মূল্য: {unitPrize[i]} টাকা/{unitName[i]}
          </p>
        </Card.Body>
        <Link to="/product">
          <Card href="/product">
          <Row>
            <div className='proButton'>
              <button
                value={id[i]}
              >
                পণ্য দেখুন
              </button>
            </div>
          </Row>
          </Card>
        </Link>
      </Card>
    )
  }

  return (
    <>
      {cart}
    </>
  )
}

const Products = () => {

  return (
    <>
      <Card style={{
        marginTop: '2px',
        marginLeft: '5px',
        marginRight: '5px'
      }}>
        <Row
          style={{
            marginTop: '25px',
            height: '250px',
            marginBottom: '25px',
            marginLeft: '5px',
            marginRight: '5px',
          }}
        >
          <Col md='3'>
            <Card>
              <Dropdown
                as={ButtonGroup}
                style={{
                  marginTop: '5px',
                  backgroundColor: 'rgba(181, 218, 164, .3)',
                }}
              >
                <Button variant='success'>মাছ</Button>
                <Dropdown.Toggle
                  split
                  variant='success'
                  id='dropdown-split-basic'
                  style={{ backgroundColor: 'rgba(181, 218, 164, .3)' }}
                />
                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>রুই</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>কাতল</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>পাঙ্গাস</Dropdown.Item>
                  <Dropdown.Item href='#/action-1'>ইলিশ</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>বোয়াল</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>মাছের পোনা</Dropdown.Item>
                  <Dropdown.Item href='#/action-1'>কই</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>তেলাপিয়া</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>অন্যান্য</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                as={ButtonGroup}
                style={{
                  marginTop: '5px',
                  backgroundColor: 'rgba(181, 218, 164, .3)',
                }}
              >
                <Button variant='success'>মাংস</Button>
                <Dropdown.Toggle
                  split
                  variant='success'
                  id='dropdown-split-basic'
                  style={{ backgroundColor: 'rgba(181, 218, 164, .3)' }}
                />
                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>গরু</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>ব্রয়লার মুরগি</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>দেশি মুরগি</Dropdown.Item>
                  <Dropdown.Item href='#/action-1'>কক</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>খাসি</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>অন্যান্য</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                as={ButtonGroup}
                style={{
                  marginTop: '5px',
                  backgroundColor: 'rgba(181, 218, 164, .3)',
                }}
              >
                <Button variant='success'>শাক-সবজি</Button>
                <Dropdown.Toggle
                  split
                  variant='success'
                  id='dropdown-split-basic'
                  style={{ backgroundColor: 'rgba(181, 218, 164, .3)' }}
                />
                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>টমেটো</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>গাজর</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>বাঁধাকপি</Dropdown.Item>
                  <Dropdown.Item href='#/action-1'>ফুলকপি</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>ডাঙ্গা</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>পটল</Dropdown.Item>
                  <Dropdown.Item href='#/action-1'>আলু</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>শিম</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>অন্যান্য</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                as={ButtonGroup}
                style={{
                  marginTop: '5px',
                  backgroundColor: 'rgba(181, 218, 164, .3)',
                }}
              >
                <Button variant='success'>ফলমূল</Button>
                <Dropdown.Toggle
                  split
                  variant='success'
                  id='dropdown-split-basic'
                  style={{ backgroundColor: 'rgba(181, 218, 164, .3)' }}
                />
                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>আম</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>লিচু</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>কদবেল</Dropdown.Item>
                  <Dropdown.Item href='#/action-1'>কামরাঙ্গা</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>আপেল</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>কমলা</Dropdown.Item>
                  <Dropdown.Item href='#/action-1'>অন্যান্য</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                as={ButtonGroup}
                style={{
                  marginTop: '5px',
                  backgroundColor: 'rgba(181, 218, 164, .3)',
                }}
              >
                <Button variant='success'>অন্যান্য</Button>
                <Dropdown.Toggle
                  split
                  variant='success'
                  id='dropdown-split-basic'
                  style={{ backgroundColor: 'rgba(181, 218, 164, .3)' }}
                />
                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>সার</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>কিটনাশক</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>মাচা</Dropdown.Item>
                  <Dropdown.Item href='#/action-1'>অন্যান্য</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card>
          </Col>
          <Col md='9'>
            <Card
              style={{
                width: '100%',
                height: '250px',
                backgroundColor: 'rgba(181, 218, 164, .3)',
                backgroundSize: 'cover',
                display: 'flex',
                color: '#000',
                position: 'relative',
                textAlign: 'absolute',
              }}
            >
              <img
                src={bgImage}
                alt='Not found'
                style={{
                  background: 'white',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              />
            </Card>
          </Col>
        </Row>
      </Card>
      <Container fluid>
        <Row style={{ marginTop: 25 }}>
          <Col md='auto' style={{ marginLeft: 25 }}>
            <Row>
              <Card className='card-stats'>
                <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15 }}>
                  বিভাগ ও জেলা
                </Card.Title>
                <Card.Body>
                  <Form>
                    <Form.Group as={Col} controlId='division'>
                      <Form.Label>বিভাগ</Form.Label>
                      <Form.Control as='select' defaultValue='ঢাকা'>
                        <option>ঢাকা</option>
                        <option>ময়মনসিংহ</option>
                        <option>সিলেট</option>
                        <option>খুলনা</option>
                        <option>বরিশাল</option>
                        <option>রংপুর</option>
                        <option>রাজশাহী</option>
                        <option>চট্টগ্রাম</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='district'>
                      <Form.Control type='text' placeholder='জেলা' />
                    </Form.Group>
                    <Button
                      variant='success'
                      style={{ marginBottom: 10, marginLeft: 110 }}
                    >
                      সার্চ করুন
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card className='card-stats'>
                <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15 }}>
                  সময়
                </Card.Title>
                <Card.Body>
                  <Form>
                    <Form.Group controlId='division'>
                      <Form.Control type='date' placeholder='দিন' />
                    </Form.Group>
                    <Button
                      variant='success'
                      style={{ marginBottom: 10, marginLeft: 110 }}
                    >
                      সার্চ করুন
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card className='card-stats'>
                <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15 }}>
                  মূল্য
                </Card.Title>
                <Card.Body>
                  <Form>
                    <Form.Group
                      controlId='formBasicRange'
                      style={{ color: 'rgba(181, 218, 164, .3)' }}
                    >
                      <Form.Label>টাকা</Form.Label>
                      <Form.Control type='range' />
                    </Form.Group>
                    <Button
                      variant='success'
                      style={{ marginBottom: 10, marginLeft: 110 }}
                    >
                      সার্চ করুন
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Row>
          </Col>

          <Col md='9' style={{ marginRight: 0, marginLeft: 0 }}>
            <Card md='auto'>
              <Card.Body
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  overflow: 'hidden',
                  width: '100%',
                }}
              >
                {Cart()}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Products