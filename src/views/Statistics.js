import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Statistics() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">ক্রয় তালিকা</Card.Title>
                <p className="card-category">
                  ক্রয়কৃত পণ্যসমূহ
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ক্রমিক</th>
                      <th className="border-0">পণ্যের নাম</th>
                      <th className="border-0">মূল্য</th>
                      <th className="border-0">পরিমাণ</th>
                      <th className="border-0">ক্রয়ের তাং</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>১</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>২</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">বিক্রয় তালিকা</Card.Title>
                <p className="card-category">
                  বিক্রয়কৃত পণ্যসমূহ
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ক্রমিক</th>
                      <th className="border-0">পণ্যের নাম</th>
                      <th className="border-0">মূল্য</th>
                      <th className="border-0">পরিমাণ</th>
                      <th className="border-0">ক্রয়ের তাং</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>১</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>২</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Statistics;
