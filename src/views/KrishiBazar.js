import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import bg from 'assets/img/bgKrishiBazar.jpg'
import Cart from 'components/Cart/Cart'
import Banner from 'components/Banner'
import CategoryCard from 'components/CategoryCard'
import SearchBox from 'components/SearchBox'
import NewArrival from 'components/Cart/NewArrival'


const KrishiBazar = () => {

  const cart = Cart()
  return (
    <>
      {Banner(<CategoryCard />, bg)}

      <Row className="SignInAndUp">
        <Col md='2.5'>
          <Card className="SignInAndUp" style={{ backgroundColor: '#F4FFEF' }}>
            <SearchBox />
          </Card>
        </Col>
        <Col md='9'>
          <Card className="SignInAndUp" style={{ backgroundColor: '#F4FFE0' }}>
            <h2>নতুন পণ্য</h2>
            <Row className="SignInAndUp">
              <NewArrival />
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default KrishiBazar
