import React from "react"
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap"
import bg from "../assets/img/homepage/BG.png"
import fosholerDoctorLogo from "../assets/img/homepage/fosholer-doctor.png"
import forumLogo from "../assets/img/homepage/forum.png"
import krishiBazarLogo from "../assets/img/homepage/krishi-bazar.png"
import kishanLogo from "../assets/img/homepage/kishan.png"
import { Link } from "react-router-dom"

function card(logo, name, link) {
  return (
    <Col>
    <Link to={link}>
      <Card href={link}>
        <Card.Body>
          <img  src={logo}
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
          <h3 style={{ textAlign: "center" }}>{name}</h3>
          </Card.Footer>
      </Card>
    </Link>
    </Col>
  )
}

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

            {card(forumLogo, "কৃষি ফোরাম", "/krishi-forum")}
            {card(krishiBazarLogo, "কৃষি বাজার", "/krishi-bazar")}
            {card(fosholerDoctorLogo, "ফসলের ডাক্তার", "/fosholer-doctor")}
        </Row>
      </Container>
    </>
  )
}

export default Home