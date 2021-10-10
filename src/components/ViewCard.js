import kishanLogo from "../assets/img/homepage/kishan.png"
import { Link } from "react-router-dom"
import {
    Card,
    Container,
    Row,
    Col,
  } from "react-bootstrap"

function card(logo, name, link) {
    return (
      <Col>
        <Link to={link}>
          <Card href={link}>
            <Card.Body>
              <img src={logo}
                alt="Not Found"
                style={{
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

  export default card