import React from "react";
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
  Form
} from "react-bootstrap";

function AddProduct() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card>
              <div className="header text-center">
                <h4 className="title">পণ্য সম্পর্কিত তথ্যাদি</h4>
                <p className="category">
                  পণ্য যোগ করতে চাইলে নিম্নোক্ত তথ্যাসমূহ সরবরাহ করে সাবমিট করুন।
                </p>
                <br></br>
              </div>
              <Table responsive>
                <thead>
                  <tr>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>পণ্যের নাম</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId="productName">
                          <Form.Control type="text" placeholder="পণ্যের নাম"/>
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>ক্যাটাগরি</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId="catagorie">
                          <Form.Control type="text" placeholder="ক্যাটাগরি"/>
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>পরিমাণ</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId="amount">
                          <Form.Control type="kg" placeholder="পরিমাণ"/>
                        </Form.Group>
                      </Form>
                      </td>
                  </tr>
                  <tr>
                    <td>এককপ্রতি মূল্য</td>
                    <td>
                      
                    </td>
                    <td>
                      <Form>
                        <Form.Group controlId="price">
                          <Form.Control type="number" placeholder="মূল্য"/>
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>উৎপাদন স্থান</td>
                    <td>
                      
                    </td>
                    <td>
                      <Form>
                        <Form.Group controlId="origin">
                          <Form.Control type="text" placeholder="উৎপাদন স্থান"/>
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>বিবরণ</td>
                    <td>
                      
                    </td>
                    <td>
                      <Form>
                        <Form.Group controlId="description">
                          <Form.Control type="text" placeholder="বিবরণ"/>
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>ছবি যোগ করুন</td>
                    <td>
                      
                    </td>
                    <td>
                    <Form>
                        <Form.Group controlId="photo">
                          <Form.Control type="file" placeholder="ছবি"/>
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>
                  <tr className="last-row">
                    <td></td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                      <Button
                        className="btn-round btn-fill"
                        href="#addProduct"
                        target="_blank"
                        variant="success"
                      >
                        যোগ করুন
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddProduct;