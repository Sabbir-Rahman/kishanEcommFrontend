import React from 'react'
import { Button, Card, Row, Col, Form } from 'react-bootstrap'
import bg from 'assets/img/bgKrishiBazar.jpg'
import Cart from 'components/Cart'
import Banner from 'components/Banner'
import card from 'components/ViewCard'
import corpsLogo from 'assets/img/corp.jpg'
import vegetableLogo from 'assets/img/vegetable.jpg'
import fruitLogo from 'assets/img/fruit.png'
import pesticidesLogo from 'assets/img/pesticides.jpeg'
import poultryLogo from 'assets/img/poultry.jpg'
import meatLogo from 'assets/img/meat.png'
import fishLogo from 'assets/img/fish.jpg'
import othersLogo from 'assets/img/others.png'

const KrishiBazar = () => {

  const component = (
    <>
      <Row style={{
        position: 'center'
      }}>
        <Button style={{
          background: 'none',
          color: 'inherit',
          border: 'none',
          padding: '0',
          font: 'inherit',
          cursor: 'pointer',
          outline: 'inherit',
        }}
          onClick={(e) => localStorage.setItem('category', "corps")}>
          {card(corpsLogo, 'শস্য', '/category')}
        </Button>
        <Button style={{
          background: 'none',
          color: 'inherit',
          border: 'none',
          padding: '0',
          font: 'inherit',
          cursor: 'pointer',
          outline: 'inherit',
        }}
          onClick={(e) => localStorage.setItem('category', "vegetables")}>
          {card(vegetableLogo, 'শাক-সবজি', '/category')}

        </Button>
        <Button style={{
          background: 'none',
          color: 'inherit',
          border: 'none',
          padding: '0',
          font: 'inherit',
          cursor: 'pointer',
          outline: 'inherit',
        }}
          onClick={(e) => localStorage.setItem('category', "fruit")}>
          {card(fruitLogo, 'ফল', '/category', "fruit")}

        </Button>
        <Button style={{
          background: 'none',
          color: 'inherit',
          border: 'none',
          padding: '0',
          font: 'inherit',
          cursor: 'pointer',
          outline: 'inherit',
        }}
          onClick={(e) => localStorage.setItem('category', "pesticides")}>
          {card(pesticidesLogo, 'সার ও কীটনাশক', '/category')}
        </Button>
      <Button style={{
          background: 'none',
          color: 'inherit',
          border: 'none',
          padding: '0',
          font: 'inherit',
          cursor: 'pointer',
          outline: 'inherit',
        }}
          onClick={(e) => localStorage.setItem('category', "poultry")}>
          {card(poultryLogo, 'পোল্ট্রিজাত পণ্য', '/category')}
        
        </Button>
        <Button style={{
          background: 'none',
          color: 'inherit',
          border: 'none',
          padding: '0',
          font: 'inherit',
          cursor: 'pointer',
          outline: 'inherit',
        }}
          onClick={(e) => localStorage.setItem('category', "meat")}>
        {card(meatLogo, 'মাংস', '/category')}
        
        </Button>
        <Button style={{
          background: 'none',
          color: 'inherit',
          border: 'none',
          padding: '0',
          font: 'inherit',
          cursor: 'pointer',
          outline: 'inherit',
        }}
          onClick={(e) => localStorage.setItem('category', "fish")}>
        {card(fishLogo, 'মাছ', '/category')}
        
        </Button>
        <Button style={{
          background: 'none',
          color: 'inherit',
          border: 'none',
          padding: '0',
          font: 'inherit',
          cursor: 'pointer',
          outline: 'inherit',
        }}
          onClick={(e) => localStorage.setItem('category', "others")}>
        {card(othersLogo, 'অন্যান্য', '/category')}
        </Button>
      </Row>
    </>
  )

  return (
    <>
      {Banner(component, bg)}
      <Row style={{ marginLeft: 10, marginRight: 10 }}>
          <Col style={{ marginRight: 0, marginLeft: 0 }}>
            <Card md='auto'>
              <Card.Header>
                সর্বাধিক বিক্রিত
                </Card.Header>
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
                {Cart('http://127.0.0.1:5000/product/view?division=dhaka&&category=fruit')}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginLeft: 10, marginRight: 10 }}>
          <Col style={{ marginRight: 0, marginLeft: 0 }}>
            <Card md='auto'>
              <Card.Header>
                সর্বোচ্চ রেটিং
                </Card.Header>
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
                {Cart('http://127.0.0.1:5000/product/view?division=dhaka')}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginLeft: 10, marginRight: 10 }}>
          <Col style={{ marginRight: 0, marginLeft: 0 }}>
            <Card md='auto'>
              <Card.Header>
                নতুন পণ্য
                </Card.Header>
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
                {Cart('http://127.0.0.1:5000/product/view?division=dhaka&&category=fruit')}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginLeft: 10, marginRight: 10 }}>
          <Col style={{ marginRight: 0, marginLeft: 0 }}>
            <Card md='auto'>
              <Card.Header>
                সকল পণ্য
                </Card.Header>
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
                {Cart('http://127.0.0.1:5000/product/view')}
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </>
  )
}

export default KrishiBazar
