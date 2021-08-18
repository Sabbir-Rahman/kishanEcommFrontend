import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom"
import { productContext } from 'Global/ProductContext'
import { cartContext } from 'Global/CartContext'
import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
  ButtonGroup,
  Modal,
} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import bgImage from 'assets/img/bgKrishiBazar.jpg'
import { Link } from "react-router-dom"

function handleSubmit(){
    const product = { productID: productID}
}

const Products = (props) => {
  const [modalShow, setModalShow] = React.useState(false)
  const { products } = useContext(productContext)
  const { dispatch } = useContext(cartContext)

  // data destructure

  console.log(props.products.data)

  return (
    <>
      <Card style={{ marginTop: '2px',
                     marginLeft: '5px',
                     marginRight: '5px' }}>
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
          <Col md='9'>
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
                {products.map((product) => (
                  <Card
                    key={product.id}
                    style={{
                      marginRight: '5px',
                      marginLeft: '5px',
                      overflow: 'hidden',
                    }}
                  >
                    <Card.Header style={{ width: '220px', height: '200px' }}>
                      <img
                        src={product.image}
                        alt='Not found'
                        style={{
                          background: 'white',
                          width: '220px',
                          height: '200px',
                          overflow: 'hidden',
                        }}
                      />
                    </Card.Header>
                    <Card.Body>
                      <p style={{ marginTop: '10px', fontSize: '20px' }}>
                        {product.name}
                      </p>
                      <p
                        style={{
                          marginTop: '0px',
                          color: 'grey',
                          fontSize: '12px',
                        }}
                      >
                        সর্বনিম্ন অর্ডার
                      </p>
                      <h5 style={{ fontSize: '25px', color: 'green' }}>
                        {product.price}.00 টাকা
                      </h5>
                    </Card.Body>
                    <Link to="/product">
                    <Row>
                      <div className='proButton'>
                      <button
                          onClick={() =>
                            dispatch({
                              type: 'VIEW_PRODUCT',
                              id: product.id,
                              products,
                            })
                          }>
                          পণ্য দেখুন
                        </button>
                      </div>
                      
                    </Row>
                    </Link>
                    <Row>
                      {product.catagory === 'corp' ? (
                        <div className='corp'>শস্য</div>
                      ) : (
                        ''
                      )}
                      {product.catagory === 'fish' ? (
                        <div className='fish'>মাছ</div>
                      ) : (
                        ''
                      )}
                      {product.catagory === 'meat' ? (
                        <div className='meat'>মাংস</div>
                      ) : (
                        ''
                      )}
                      {product.catagory === 'fruit' ? (
                        <div className='fruit'>ফল</div>
                      ) : (
                        ''
                      )}
                    </Row>
                  </Card>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col md='auto'>
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
        </Row>
      </Container>
    </>
  )
}

export default Products
