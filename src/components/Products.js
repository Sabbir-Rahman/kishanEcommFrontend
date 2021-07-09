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
} from "react-bootstrap"
import KrishiBazarNavbar from './Navbars/KrishiBazarNavbar'
import bannerImage from 'assets/img/bgKrishiBazar.jpg'
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
                    <Form>
                      <Form.Group as={Col} controlId="division">
                        <Form.Label as="h5" style={{marginTop: "5px"}}>ক্যাটাগরি</Form.Label>
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
                      <Form.Group as={Col} controlId="division">
                        <Form.Label as="h5" style={{marginTop: "5px"}}>ক্যাটাগরি</Form.Label>
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
                    </Form>
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
                    <Card.Body className="products" style={{marginTop: '10px'}}>
                      {products.map(product => (
                        <Card className="product" key={product.id} style={{marginRight: '15px', marginLeft: '10px'}}>
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
                        <Form.Group controlId="formBasicRange">
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