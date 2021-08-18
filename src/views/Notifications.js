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

// data fetch

function Notifications() {
  const [showModal, setShowModal] = React.useState(false);
  const notificationAlertRef = React.useRef(null);

  return (
    <>
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">নোটিফিকেশনসমূহ</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md="6">
                <h5>
                  <small>অপঠিত নোটিফিকেশনসমূহ</small>
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
                    নোটিফিকেশন
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
                    নোটিফিকেশন
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
                    নোটিফিকেশন
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
                    নোটিফিকেশন
                  </span>
                </Alert>
              </Col>
              <Col md="6">
                <h5>
                  <small>অপঠিত নোটিফিকেশনসমূহ</small>
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
                    <b>নোটিফিকেশন -</b>
                    পঠিত নোটিফিকেশন
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
                    <b>নোটিফিকেশন -</b>
                    পঠিত নোটিফিকেশন
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
                    <b>নোটিফিকেশন -</b>
                    পঠিত নোটিফিকেশন
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
                    <b>নোটিফিকেশন -</b>
                    পঠিত নোটিফিকেশন
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

export default Notifications;
