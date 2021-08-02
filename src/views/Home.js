import React from "react"
import {
  Card,
  Container,
  Row,
  Col,
  Modal
} from "react-bootstrap"
import bg from "../assets/img/homepage/BG.png"
import fosholerDoctorLogo from "../assets/img/homepage/fosholer-doctor.png"
import forumLogo from "../assets/img/homepage/forum.png"
import krishiBazarLogo from "../assets/img/homepage/krishi-bazar.png"
import kishanLogo from "../assets/img/homepage/kishan.png"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <Container fluid style={{ backgroundImage: `url(${bg})`,
                                backgroundSize: "100%",
                                overflow: "hidden",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center top",
                                }}>
        <Row>
          <img  src={kishanLogo}
                            alt="Not Found"
                            style = {{
                              width: "40%",
                              marginTop: "5%",
                              marginLeft: "auto",
                              marginRight: "10px",
                              display: "block",
                            }}
          />
        </Row>
        <Row style={{ marginTop: "10%",
                      marginLeft: "5%",
                      marginRight: "5%",
                      position: "center",}}>
            <Col>
              <Link to="/krishi-forum">
                <Card href="/krishi-bazar">
                  <Card.Body>
                    <img  src={forumLogo}
                          alt="Not Found"
                          style = {{
                            width: "25%",
                            height: "auto",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block"
                          }}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <h3 style={{ textAlign: "center" }}>কৃষক ফোরাম</h3>
                    </Card.Footer>
                </Card>
              </Link>
            </Col>

            <Col>
              <Link to="/krishi-bazar">
                <Card href="/krishi-bazar">
                  <Card.Body>
                    <img  src={krishiBazarLogo}
                          alt="Not Found"
                          style = {{
                            width: "25%",
                            height: "auto",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block"
                          }}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <h3 style={{ textAlign: "center" }}>কৃষি বাজার</h3>
                    </Card.Footer>
                </Card>
              </Link>
            </Col>

            <Col>
              <Link to="/fosholer-doctor">
                <Card href="/fosholer-doctor">
                  <Card.Body>
                    <img  src={fosholerDoctorLogo}
                          alt="Not Found"
                          style = {{
                            width: "25%",
                            height: "auto",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block"
                          }}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <h3 style={{ textAlign: "center" }}>ফসলের ডাক্তার</h3>
                    </Card.Footer>
                </Card>
              </Link>
            </Col>
            
        </Row>
      </Container>
    </>
  )
}

export default Home