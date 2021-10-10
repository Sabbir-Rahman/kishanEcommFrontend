import React, { Component } from 'react'
import {
  Button,
  Card,
  Row,
  Col,
  Form,
} from 'react-bootstrap'
import bg from 'assets/img/bgKrishiBazar.jpg'
import Cart from 'components/Cart'
import Banner from 'components/Banner'


const KrishiBazar = () => {

  const cart = Cart(null)

  const component = <><Col>
    <Card className='card-stats' >
      <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15 }}>
        বিভাগ
      </Card.Title>
      <Card.Body>
        <Form>
          <Form.Group controlId='division'>
            <Form.Label>বিভাগ</Form.Label>
            <select class="form-control"
              as='select'
            >
              <option value=''></option>
              <option value='Dhaka'>ঢাকা</option>
              <option value='Mymensingh'>ময়মনসিংহ</option>
              <option value='Sylhet'>সিলেট</option>
              <option value='Khulna'>খুলনা</option>
              <option value='Barishal'>বরিশাল</option>
              <option value='Rangpur'>রংপুর</option>
              <option value='Rajshahi'>রাজশাহী</option>
              <option value='Chattagram'>চট্টগ্রাম</option>
            </select>
          </Form.Group>
          <Button
            variant='success'
            style={{ marginBottom: 10, marginLeft: 110 }}
          >
            সার্চ করুন
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </Col>
    <Col>
      <Card className='card-stats' >
        <Card.Title as='h4' style={{ marginTop: 10, marginLeft: 15 }}>
          ক্যাটাগরি
        </Card.Title>
        <Card.Body>
          <Form>
            <Form.Group controlId='division'>
              <Form.Label>ক্যাটাগরি</Form.Label>
              <select class="form-control"
                as='select'
              >
                <option value=''></option>
                <option value='fruit'>ফল</option>
                <option value='vegetable'>সবজি</option>
                <option value='oil'>তেল</option>
                <option value='meat'>মাংস</option>
                <option value='seeds'>বীজ</option>
                <option value='dairy'>দুগ্ধজাত পণ্য</option>
                <option value='egg'>ডিম</option>
                <option value='rice'>চাল</option>
                <option value='wheat'>গম</option>
                <option value='cotton'>তুলা</option>
                <option value='spices'>মশলা</option>
                <option value='poultry'>পোল্ট্রি</option>
                <option value='teaNcoffe'>চা ও কফি</option>
                <option value='Others'>অন্যান্য</option>
              </select>
            </Form.Group>
            <Button
              variant='success'
              style={{ marginBottom: 10, marginLeft: 110 }}
            >
              সার্চ করুন
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col></>

  return (
    <>
      {Banner(component, bg)}
      <Card style={{ marginLeft: 10, marginRight: 10 }}>
        <Row>
          <Col style={{ marginRight: 0, marginLeft: 0 }}>
            <Card md='auto'>
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
                {cart}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default KrishiBazar