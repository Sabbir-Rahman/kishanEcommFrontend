import React from "react";
import NotificationAlert from "react-notification-alert";
import {
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
} from "react-bootstrap";

function Sellrequset() {
  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">পণ্য বিক্রয় অনুরোধ</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md="6">
                <h5>
                  <small>বিক্রয় সম্পন্নকৃত পণ্যসমূহ</small>
                </h5>
                <Alert className="alert-with-icon" variant="info">
                  <button
                    aria-hidden={true}
                    className="close"
                    data-dismiss="alert"
                    type="button"
                  >
                    <i className="nc-icon nc-simple-remove"></i>
                  </button>
                  <span
                    data-notify="icon"
                    className="nc-icon nc-bell-55"
                  ></span>
                  <span>
                    পণ্য
                  </span>
                </Alert>
                <Alert className="alert-with-icon" variant="info">
                  <button
                    aria-hidden={true}
                    className="close"
                    data-dismiss="alert"
                    type="button"
                  >
                    <i className="nc-icon nc-simple-remove"></i>
                  </button>
                  <span
                    data-notify="icon"
                    className="nc-icon nc-bell-55"
                  ></span>
                  <span>
                    পণ্য
                  </span>
                </Alert>
                <Alert className="alert-with-icon" variant="info">
                  <button
                    aria-hidden={true}
                    className="close"
                    data-dismiss="alert"
                    type="button"
                  >
                    <i className="nc-icon nc-simple-remove"></i>
                  </button>
                  <span
                    data-notify="icon"
                    className="nc-icon nc-bell-55"
                  ></span>
                  <span>
                    পণ্য
                  </span>
                </Alert>
                <Alert className="alert-with-icon" variant="info">
                  <button
                    aria-hidden={true}
                    className="close"
                    data-dismiss="alert"
                    type="button"
                  >
                    <i className="nc-icon nc-simple-remove"></i>
                  </button>
                  <span
                    data-notify="icon"
                    className="nc-icon nc-bell-55"
                  ></span>
                  <span>
                    পণ্য
                  </span>
                </Alert>
              </Col>
              <Col md="6">
                <h5>
                  <small>বিক্রয় অসম্পন্ন পণ্যসমূহ</small>
                </h5>
                <Alert variant="success">
                  <button
                    aria-hidden={true}
                    className="close"
                    data-dismiss="alert"
                    type="button"
                  >
                    <i className="nc-icon nc-simple-remove"></i>
                  </button>
                  <span>
                    <b>পণ্য -</b>
                     পণ্য
                  </span>
                </Alert>
                <Alert variant="success">
                  <button
                    aria-hidden={true}
                    className="close"
                    data-dismiss="alert"
                    type="button"
                  >
                    <i className="nc-icon nc-simple-remove"></i>
                  </button>
                  <span>
                    <b>পণ্য -</b>
                     পণ্য
                  </span>
                </Alert>
                <Alert variant="success">
                  <button
                    aria-hidden={true}
                    className="close"
                    data-dismiss="alert"
                    type="button"
                  >
                    <i className="nc-icon nc-simple-remove"></i>
                  </button>
                  <span>
                    <b>পণ্য -</b>
                     পণ্য
                  </span>
                </Alert>
                <Alert variant="success">
                  <button
                    aria-hidden={true}
                    className="close"
                    data-dismiss="alert"
                    type="button"
                  >
                    <i className="nc-icon nc-simple-remove"></i>
                  </button>
                  <span>
                    <b>পণ্য -</b>
                     পণ্য
                  </span>
                </Alert>
              </Col>
              </Row>
          </Card.Body>
        </Card>

      </Container>
    </>
  );
}

export default Sellrequset;
