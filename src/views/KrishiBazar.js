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

      <Row>
        <Col md='2.5' style={{ marginLeft: '5%' }}><SearchBox /></Col>
        <Col>
          <Row>
            <NewArrival />
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default KrishiBazar
