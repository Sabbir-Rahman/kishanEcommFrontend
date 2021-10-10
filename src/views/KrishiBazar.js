import React from 'react'
import ProductsContextProvider from 'Global/ProductContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Button,
  Card,
  Row,
  Col,
  Form,
} from 'react-bootstrap'
import bgImage from 'assets/img/bgKrishiBazar.jpg'
import Cart from 'components/Cart'


const KrishiBazar = () => {

  return (
    <ProductsContextProvider>
      <Router>
        <Switch>
          <Route path='/krishi-bazar' exact>
            <>
              <Card style={{
                marginTop: '2px',
                marginLeft: '10px',
                marginRight: '10px'
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

                  <Col>
                    <Card
                      style={{
                        width: '100%',
                        height: '60%',
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
                <Row md='auto' style={{ marginLeft: '2%', marginRight: '2%' }}>
                  <Col>
                    <Card className='card-stats' >
                      <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15}}>
                        বিভাগ
                      </Card.Title>
                      <Card.Body>
                        <Form>
                          <Form.Group controlId='division'>
                            <Form.Label>বিভাগ</Form.Label>
                            <Form.Control as='select' defaultValue='Sylhet'>
                              <option>Dhaka</option>
                              <option>Mymensingh</option>
                              <option>Sylhet</option>
                              <option>Khulna</option>
                              <option>Barishal</option>
                              <option>Rangpur</option>
                              <option>Rajshahi</option>
                              <option>Chattagram</option>
                            </Form.Control>
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
                  </Col>
                  <Col>
                    <Card className='card-stats' >
                      <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15}}>
                        ক্যাটাগরি
                      </Card.Title>
                      <Card.Body>
                        <Form>
                          <Form.Group controlId='division'>
                            <Form.Label>ক্যাটাগরি</Form.Label>
                            <Form.Control as='select' defaultValue='Fruit'>
                              <option>Fruit</option>
                              <option>Vegetable</option>
                              <option>Oil</option>
                              <option>Meat</option>
                              <option>Seeds</option>
                              <option>Dairy</option>
                              <option>Egg</option>
                              <option>Wheat</option>
                              <option>Cotton</option>
                              <option>Organic</option>
                              <option>Spices</option>
                              <option>Rice</option>
                              <option>Fish</option>
                              <option>Poultry</option>
                              <option>Tea</option>
                              <option>Coffee</option>
                            </Form.Control>
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
                  </Col>
                </Row>
              </Card>
              <Card style={{ marginLeft: 10, marginRight: 10 }}>
                <Row>
                  <Col style={{ marginRight: 0, marginLeft: 0 }}>
                    <Card md='auto'>
                      <Card.Body
                        style={{
                          marginTop: '1%',
                          marginLeft: '1%',
                          marginRight: '1%',
                          display: 'flex',
                          flexWrap: 'wrap',
                          overflow: 'hidden',
                        }}
                      >
                        <Cart/>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </>
          </Route>
        </Switch>
      </Router>
    </ProductsContextProvider>
  )
}

export default KrishiBazar