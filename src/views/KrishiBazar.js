import React from 'react'
import { Row, Col } from 'react-bootstrap'
import bg from 'assets/img/bgKrishiBazar.jpg'
import Cart from 'components/Cart'
import Banner from 'components/Banner'
import CategoryCard from 'components/CategoryCard'
import SearchBox from 'components/SearchBox'


const KrishiBazar = () => {

  return (
    <>
      {Banner(<CategoryCard/>, bg)}
        <Row>
          <Col md='auto' style={{margin: '30px'}}><SearchBox/></Col>
          <Col><Row>{Cart('http://127.0.0.1:5000/product/view')}</Row></Col>
        </Row>
      
    </>
  )
}

export default KrishiBazar
