import React, { useContext } from 'react'
import {productContext} from 'Global/ProductContext'
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
} from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown'
import KrishiBazarNavbar from './Navbars/KrishiBazarNavbar'
const Products = () => {
    const {products} = useContext(productContext)
    const {dispatch} = useContext(cartContext)
    return(
          <>
            <KrishiBazarNavbar />
            <Card style={{marginTop: "60px"}}>
              <Row style={{ marginTop: "25px",
                            height: "250px",
                            marginBottom: "25px",
                            marginLeft: "5px",
                            marginRight: "5px"}}>
                <Col md="3">
                  <Card>
                    <Dropdown as={ButtonGroup} style={{marginTop: "5px", backgroundColor: "rgba(181, 218, 164, .3)"}}>
                      <Button variant="success" >মাছ</Button>
                      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" style={{backgroundColor: "rgba(181, 218, 164, .3)"}}/>
                      <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1">রুই</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">কাতল</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">পাঙ্গাস</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">ইলিশ</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">বোয়াল</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">মাছের পোনা</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">কই</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">তেলাপিয়া</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">অন্যান্য</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup} style={{marginTop: "5px", backgroundColor: "rgba(181, 218, 164, .3)"}}>
                      <Button variant="success" >মাংস</Button>
                      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" style={{backgroundColor: "rgba(181, 218, 164, .3)"}}/>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">গরু</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">ব্রয়লার মুরগি</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">দেশি মুরগি</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">কক</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">খাসি</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">অন্যান্য</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup} style={{marginTop: "5px", backgroundColor: "rgba(181, 218, 164, .3)"}}>
                      <Button variant="success" >শাক-সবজি</Button>
                      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" style={{backgroundColor: "rgba(181, 218, 164, .3)"}}/>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">টমেটো</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">গাজর</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">বাঁধাকপি</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">ফুলকপি</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">ডাঙ্গা</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">পটল</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">আলু</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">শিম</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">অন্যান্য</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup} style={{marginTop: "5px", backgroundColor: "rgba(181, 218, 164, .3)"}}>
                      <Button variant="success" >ফলমূল</Button>
                      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" style={{backgroundColor: "rgba(181, 218, 164, .3)"}}/>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">আম</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">লিচু</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">কদবেল</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">কামরাঙ্গা</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">আপেল</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">কমলা</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">অন্যান্য</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup} style={{marginTop: "5px", backgroundColor: "rgba(181, 218, 164, .3)"}}>
                      <Button variant="success">অন্যান্য</Button>
                      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" style={{backgroundColor: "rgba(181, 218, 164, .3)"}}/>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">সার</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">কিটনাশক</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">মাচা</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">অন্যান্য</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card>
                </Col>
                <Col md="9">
                  <Card style={{  width: "100%",
                                      height: "250px",
                                      backgroundColor: "rgba(181, 218, 164, .3)",
                                      backgroundSize: "cover",
                                      display: "flex",
                                      color: "#000",
                                      padding: "0 105px",
                                      position: "relative",
                                      textAlign: "absolute",
                                      }}>  
                      <h1>কিষাণ</h1>
                      <p>কৃষক হাসলে হাসে দেশ</p>
                  </Card>
                </Col>
              </Row>
            </Card>
            <Container fluid>
              <Row style={{marginTop: 25}}>
                <Col md="9">
                  <Card md="auto">
                    <Card.Body style={{ marginTop: '10px',
                                        display: "flex",
                                        flexWrap: "wrap",
                                        overflow: "hidden",
                                        width: "100%" }}>
                      {products.map(product => (
                        <Card key={product.id} style={{ marginRight: '5px',
                                                        marginLeft: '5px',
                                                        overflow: "hidden",
                                                        }}>
                          <Card.Header className="productImage">
                            <img src={product.image} alt="Not found"/>
                          </Card.Header>
                          <Card.Body className="productDetails">
                            <div className="proName">
                              <h4>{product.name}</h4>
                            </div>
                            <div className="proPrice">
                              {product.price}.00 টাকা
                            </div>
                          </Card.Body>
                            <div className="proButton" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})}>
                              <button className="buyNow" >কার্টে যোগ করুন</button>
                            </div>
                            {product.catagory === 'corp' ? <div className="corp">শস্য</div>: ''}
                            {product.catagory === 'fish' ? <div className="fish">মাছ</div>: ''}
                            {product.catagory === 'meat' ? <div className="meat">মাংস</div>: ''}
                            {product.catagory === 'fruit' ? <div className="fruit">ফল</div>: ''}
                        </Card>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
                  <Col md="auto">
                  <Row>
                    <Card className="card-stats">
                      <Card.Title as="h4" style={{marginTop: 10, marginLeft: 15}}>বিভাগ ও জেলা</Card.Title>
                      <Card.Body>
                      <Form>
                      <Form.Group as={Col} controlId="division">
                          <Form.Label>বিভাগ</Form.Label>
                          <Form.Control as="select" defaultValue="ঢাকা">
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
                        <Form.Group controlId="district">
                          <Form.Control type="text" placeholder="জেলা" />
                        </Form.Group>
                        <Button variant="success" style={{marginBottom: 10, marginLeft: 110}}>সার্চ করুন</Button>
                      </Form>
                      </Card.Body>
                    </Card>
                  </Row>
                  <Row>
                    <Card className="card-stats">
                      <Card.Title as="h4" style={{marginTop: 10, marginLeft: 15}}>সময়</Card.Title>
                      <Card.Body>
                      <Form>
                        <Form.Group controlId="division">
                          <Form.Control type="date" placeholder="দিন" />
                        </Form.Group>
                        <Button variant="success" style={{marginBottom: 10, marginLeft: 110}}>সার্চ করুন</Button>
                      </Form>
                      </Card.Body>
                    </Card>
                  </Row>
                  <Row>
                    <Card className="card-stats">
                      <Card.Title as="h4" style={{marginTop: 10, marginLeft: 15}}>মূল্য</Card.Title>
                      <Card.Body>
                      <Form>
                        <Form.Group controlId="formBasicRange" style={{color: "rgba(181, 218, 164, .3)"}}>
                          <Form.Label>টাকা</Form.Label>
                          <Form.Control type="range" />
                        </Form.Group>
                        <Button variant="success" style={{marginBottom: 10, marginLeft: 110}}>সার্চ করুন</Button>
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