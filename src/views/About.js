import { Container, Row, Col, Card } from 'react-bootstrap'
import রাফীর_ছবি from 'assets/img/about/rafi.jpg'
import রাতুলের_ছবি from 'assets/img/about/ratul.jpg'
import সাব্বিরের_ছবি from 'assets/img/about/sabbir.jpg'

const about = () => {
  return (
    <Container fluid>
      <Container
        fluid
        className='SignInAndUp'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
        }}
      >
        <Card style={{ width: '30%', margin: '5%' }}>
          <Card.Body>
            <Col>
              <img
                src={রাতুলের_ছবি}
                alt='রাতুলের ছবি পাওয়া যায়নি'
                style={{
                  background: 'white',
                  width: '100%',
                  height: 'auto',
                  overflow: 'hidden',
                }}
              />
            </Col>
            <Col style={{ marginLeft: '2%' }}>
              <Row as='h3'>রাতুল মাহযাবিন</Row>
              <Row>আইডি: ১৮০০৪২১২৩</Row>
              <Row>প্রোগ্রাম: বিএসসি ইন সফটওয়্যার ইঞ্জিনিয়ারিং</Row>
              <Row>ইসলামি প্রযুক্তি বিশ্ববিদ্যালয়</Row>
            </Col>
          </Card.Body>
        </Card>
        <Card style={{ width: '30%' }}>
          <Card.Body>
            <Col>
              <img
                src={রাফীর_ছবি}
                alt='রাফীর ছবি পাওয়া যায়নি'
                style={{
                  background: 'white',
                  width: '100%',
                  height: 'auto',
                  overflow: 'hidden',
                }}
              />
            </Col>
            <Col style={{ marginLeft: '2%' }}>
              <Row as='h3'>মোহতাসিম হাদী রাফী</Row>
              <Row>আইডি: ১৮০০৪২১৪৫</Row>
              <Row>প্রোগ্রাম: বিএসসি ইন সফটওয়্যার ইঞ্জিনিয়ারিং</Row>
              <Row>ইসলামি প্রযুক্তি বিশ্ববিদ্যালয়</Row>
            </Col>
          </Card.Body>
        </Card>
        <Card style={{ width: '30%', margin: '5%' }}>
          <Card.Body>
            <Col>
              <img
                src={সাব্বিরের_ছবি}
                alt='সাব্বিরের ছবি পাওয়া যায়নি'
                style={{
                  background: 'white',
                  width: '100%',
                  height: 'auto',
                  overflow: 'hidden',
                }}
              />
            </Col>
            <Col style={{ marginLeft: '2%' }}>
              <Row as='h3'>মো. সাব্বির রহমান</Row>
              <Row>আইডি: ১৮০০৪২১৪২</Row>
              <Row>প্রোগ্রাম: বিএসসি ইন সফটওয়্যার ইঞ্জিনিয়ারিং</Row>
              <Row>ইসলামি প্রযুক্তি বিশ্ববিদ্যালয়</Row>
            </Col>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  )
}

export default about
