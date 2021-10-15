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

      <Row style={{
        alignItems: 'flex',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Col md='2.5'>
            <SearchBox />
        </Col>
        <Col md='9'>
          <Card className="SignInAndUp" style={{ backgroundColor: '#F4FFE0' }}>
            <Card className="SignInAndUp" style={{ backgroundColor: '#F4FFE0', margin: '2px' }}><h3>নতুন পণ্য</h3></Card>
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
