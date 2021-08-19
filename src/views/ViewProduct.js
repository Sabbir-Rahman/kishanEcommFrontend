import React from "react"
import {
  Form,
  Alert,
  Badge,
  Button,
  Card,
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap"


function ViewProduct(props) {
  return (
    <>
      <div className="rna-container" style={{ marginTop: "5px" }}>
      </div>
      <Container fluid>
        <Card>
          <Card.Body>
            <Row>
              <Col md="6">
              <img
                // src={bgImage}
                alt='পণ্যের ছবি পাওয়া যায়নি'
                style={{
                  background: 'white',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              />
              </Col>
              <Col md="6">
                  <table>
                    <th><h3 style={{ marginRight: "50px" }}>পণ্যের নাম</h3></th>
                    <th style={{ color: "gray", marginLeft: "5px" }}> আইডি: ৫৪৬৫ </th>
                  </table>
                  <table>
                    <th><h5 style={{ color: "green", marginRight: "50px", font: "message-box" }}>১০ টাকা/কেজি</h5></th>
                    <th><h5 style={{ color: "green", marginRight: "50px", font: "message-box" }}>২০% বুকিং চার্জ</h5> </th>
                  </table>
                  <table>
                    <th><h5>সর্বনিম্ন অর্ডার:</h5></th>
                    <th><h5 style={{ color: "green", marginLeft: "10px", font: "message-box" }}>৩০ কেজি</h5></th>
                    <th><h5 style={{marginLeft: "30px", font: "message-box" }}>মজুদ:</h5></th>
                    <th><h5 style={{ color: "green", marginLeft: "10px", font: "message-box" }}>২৩০ কেজি</h5></th>
                    <th><h5 style={{marginLeft: "30px", font: "message-box" }}>তারিখ:</h5></th>
                    <th><h5 style={{ color: "green", marginLeft: "10px", font: "message-box" }}>০২/১৮/২০২১</h5></th>
                  </table>
                  <table>
                    <th><h5 style={{ marginRight: "30px", font: "status-bar" }}>বিভাগঃ খুলনা</h5></th>
                    <th><h5 style={{ marginRight: "30px", font: "status-bar" }}>জেলাঃ সাতক্ষীরা</h5></th>
                    <th><h5 style={{ marginRight: "30px", font: "status-bar" }}>উপজেলাঃ সাতক্ষীরা সদর</h5></th>
                  </table>
                  <p>
                    টমেটো একটি সুস্বাদু ও পুষ্টিকর সবজি। টমেটো শীতকালীন সবজি হলেও এখন সারা বছর পাওয়া যায়। কাঁচা কিংবা পাকা দু'ভাবে টমেটো খাওয়া যায়। শুধু খাবারে স্বাদই বাড়ায় না, টমেটো থেকে তৈরি হয় নানা রকমের কেচাপ, সস।
                  </p>
                  <table>
                    <th><h5 style={{ marginRight: "20px", font: "message-box" }}>বিক্রেতা:</h5></th>
                    <th><h5 style={{ color: "green", marginRight: "10px", font: "message-box" }}>বিক্রেতার নাম</h5> </th>
                    <th><h5 style={{ color: "gray", font: "status-bar" }}>আড়তদার</h5> </th>
                  </table>
                  <Form>
                    <table>
                      <th>
                    <Form.Control
                      type='number'
                      name='qty'
                      placeholder='পণ্যের পরিমাণ'
                    />
                      </th>
                      <th>
                      <Button variant='success' style={{marginLeft: "20px"}}>
                      ক্রয় অনুরোধ প্রেরণ করুন
                    </Button>
                      </th>
                    </table>
                    
                    
                  </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default ViewProduct;