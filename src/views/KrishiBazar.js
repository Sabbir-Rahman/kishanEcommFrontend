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
import { CardFooter } from 'reactstrap'

const KrishiBazar = () => {

  const component = (
    <>
      <Row style={{
        position: 'center',
        marginLeft: '9%'
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
      <Card style={{
        margin: '2.5%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
      >
        <Card style={{
          margin: '1.5%'
        }}>
          <h3 style={{ textAlign: "center" }}>ফাইভ স্টার রেটিং</h3>
        </Card>
        <Row style={{ marginLeft: '7%' }}>{Cart('http://http://127.0.0.1:5000/product/view?rating=5')}</Row>
      </Card>

      <Row>
        <Col>
          <Card style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
          >
            <Card style={{
              margin: '1.5%'
            }}>
              <h3 style={{ textAlign: "center" }}>ঢাকা বিভাগের পণ্য</h3>
            </Card>
            <Row style={{ marginLeft: '7%' }}>{Cart('http://127.0.0.1:5000/product/view?division=Dhaka')}</Row>
          </Card>
        </Col>
        <Col>
          <Card style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
          >
            <Card style={{
              margin: '1.5%'
            }}>
              <h3 style={{ textAlign: "center" }}>ময়মনসিংহ বিভাগের পণ্য</h3>
            </Card>
            <Row style={{ marginLeft: '7%' }}>{Cart('http://127.0.0.1:5000/product/view?division=Mymensingh')}</Row>
          </Card>
        </Col>
        <Col>
          <Card style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
          >
            <Card style={{
              margin: '1.5%'
            }}>
              <h3 style={{ textAlign: "center" }}>রংপুর বিভাগের পণ্য</h3>
            </Card>
            <Row style={{ marginLeft: '7%' }}>{Cart('http://127.0.0.1:5000/product/view?division!=Rangpur')}</Row>
          </Card>
        </Col>
      </Row>



      <Card style={{
        margin: '2.5%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
      >


        <Card style={{
          margin: '1.5%'
        }}>
          <h3 style={{ textAlign: "center" }}>সকল পণ্য</h3>
        </Card>
        <Row style={{ marginLeft: '7%' }}>{Cart('http://127.0.0.1:5000/product/view')}</Row>
      </Card>
    </>
  )
}

export default KrishiBazar
