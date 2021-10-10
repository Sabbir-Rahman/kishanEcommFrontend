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
                      <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15 }}>
                        বিভাগ
                      </Card.Title>
                      <Card.Body>
                        <Form>
                          <Form.Group controlId='division'>
                            <Form.Label>বিভাগ</Form.Label>
                            <select class="form-control"
                            as='select'
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
                          >
                            সার্চ করুন
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className='card-stats' >
                      <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15 }}>
                        ক্যাটাগরি
                      </Card.Title>
                      <Card.Body>
                        <Form>
                          <Form.Group controlId='division'>
                            <Form.Label>ক্যাটাগরি</Form.Label>
                            <select class="form-control"
                            as='select'
                          >
                            <option value=''></option>
                            <option value='fruit'>ফল</option>
                            <option value='vegetable'>সবজি</option>
                            <option value='oil'>তেল</option>
                            <option value='meat'>মাংস</option>
                            <option value='seeds'>বীজ</option>
                            <option value='dairy'>দুগ্ধজাত পণ্য</option>
                            <option value='egg'>ডিম</option>
                            <option value='rice'>চাল</option>
                            <option value='wheat'>গম</option>
                            <option value='cotton'>তুলা</option>
                            <option value='spices'>মশলা</option>
                            <option value='poultry'>পোল্ট্রি</option>
                            <option value='teaNcoffe'>চা ও কফি</option>
                            <option value='Others'>অন্যান্য</option>
                          </select>
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
                        <Cart />
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