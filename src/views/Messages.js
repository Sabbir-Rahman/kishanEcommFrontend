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

function Messages() {
  const [showModal, setShowModal] = React.useState(false);
  const notificationAlertRef = React.useRef(null);

  return (
    <>
    <Container fluid>
      <Card>
        <Card.Header>
          <Card.Title as="h4">বার্তাসমূহ</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md="6">
              <h5>
                <small>পঠিত বার্তা</small>
              </h5>
              <Row style={{ background: "rgba(181, 218, 164, .3)", width: "100%", marginBottom: "5px", marginLeft: "5px", marginRight: "5px"}}>
                <Col md="8" style={{color: "green", width: "80%"}}>বার্তা</Col>
                <Col md="2" style={{marginRight: "0px"}}><Button >টিক</Button></Col>
                <Col md="2" style={{marginRight: "0px"}}><Button>ক্রস</Button></Col>
              </Row>

              <Row style={{ background: "rgba(181, 218, 164, .3)", width: "100%", marginBottom: "5px", marginLeft: "5px", marginRight: "5px"}}>
                <Col md="8" style={{color: "green", width: "80%"}}>বার্তা</Col>
                <Col md="2" style={{marginRight: "0px"}}><Button >টিক</Button></Col>
                <Col md="2" style={{marginRight: "0px"}}><Button>ক্রস</Button></Col>
              </Row>

              <Row style={{ background: "rgba(181, 218, 164, .3)", width: "100%", marginBottom: "5px", marginLeft: "5px", marginRight: "5px"}}>
                <Col md="8" style={{color: "green", width: "80%"}}>বার্তা</Col>
                <Col md="2" style={{marginRight: "0px"}}><Button >টিক</Button></Col>
                <Col md="2" style={{marginRight: "0px"}}><Button>ক্রস</Button></Col>
              </Row>

            </Col>
            <Col md="6">
              <h5>
                <small>অপঠিত বার্তা</small>
              </h5>
              <Row style={{ background: "rgba(181, 218, 164, .3)", width: "100%", marginBottom: "5px", marginLeft: "5px", marginRight: "5px"}}>
                <Col md="8" style={{color: "green", width: "80%"}}>বার্তা</Col>
                <Col md="2" style={{marginRight: "0px"}}><Button >টিক</Button></Col>
                <Col md="2" style={{marginRight: "0px"}}><Button>ক্রস</Button></Col>
              </Row>

              <Row style={{ background: "rgba(181, 218, 164, .3)", width: "100%", marginBottom: "5px", marginLeft: "5px", marginRight: "5px"}}>
                <Col md="8" style={{color: "green", width: "80%"}}>বার্তা</Col>
                <Col md="2" style={{marginRight: "0px"}}><Button >টিক</Button></Col>
                <Col md="2" style={{marginRight: "0px"}}><Button>ক্রস</Button></Col>
              </Row>

              <Row style={{ background: "rgba(181, 218, 164, .3)", width: "100%", marginBottom: "5px", marginLeft: "5px", marginRight: "5px"}}>
                <Col md="8" style={{color: "green", width: "80%"}}>বার্তা</Col>
                <Col md="2" style={{marginRight: "0px"}}><Button >টিক</Button></Col>
                <Col md="2" style={{marginRight: "0px"}}><Button>ক্রস</Button></Col>
              </Row>
            </Col>
            </Row>
        </Card.Body>
      </Card>
    </Container>
  </>
  );
}

export default Messages;