import React from 'react'
import { Row, Col, Card, Carousel } from 'react-bootstrap'
import bg from 'assets/img/bgKrishiBazar.jpg'
import Cart from 'components/Cart/Cart'
import Banner from 'components/Banner'
import CategoryCard from 'components/CategoryCard'
import SearchBox from 'components/SearchBox'

const KrishiBazar = () => {
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
        <Col md='9' className="SignInAndUp" style={{ backgroundColor: '#F4FFEE' }}>
          <Row>
            <Card className="SignInAndUp" style={{ backgroundColor: '#F4FFEE' }}>
              <Row className="SignInAndUp">
                {Cart()}
              </Row>
            </Card>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default KrishiBazar
