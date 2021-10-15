import React from 'react'
import { Row, Col, Card, Carousel } from 'react-bootstrap'
import bg from 'assets/img/bgKrishiBazar.jpg'
import Cart from 'components/Cart/Cart'
import Banner from 'components/Banner'
import CategoryCard from 'components/CategoryCard'
import SearchBox from 'components/SearchBox'
import NewArrival from 'components/Cart/NewArrival'
import FreeBooking from 'components/Cart/FreeBooking'


const KrishiBazar = () => {

  const cart = Cart()
  return (
    <>
      {Banner(<CategoryCard />, bg)}
      <Row style={{
        alignItems: 'flex',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Col md='2.5' style={{ margin: '5px' }}>
          <SearchBox />
        </Col>
        <Col md='9'>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Card className="SignInAndUp" style={{ backgroundColor: '#F4FFEE' }}>
                  <Card className="SignInAndUp" style={{ margin: '2px' }}><h3>নতুন পণ্য</h3></Card>
                  <Row className="SignInAndUp">
                    <NewArrival />
                  </Row>
                </Card>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Card className="SignInAndUp" style={{ backgroundColor: '#F4FFEE' }}>
                  <Card className="SignInAndUp" style={{ margin: '2px' }}><h3>ফ্রি বুকিং</h3></Card>
                  <Row className="SignInAndUp">
                    <FreeBooking />
                  </Row>
                </Card>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  )
}

export default KrishiBazar
