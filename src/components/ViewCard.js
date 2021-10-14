import { Link } from "react-router-dom"
import {
    Card,
    Col,
  } from "react-bootstrap"

function card(logo, name, link) {
    return (
      <Col>
        <Link to={link}>
          <Card href={link}>
            <Card.Body style={{
              alignContent: "center",
              height: "180px",
              width: "250px",
              alignItems: "center",
              display: "block",
              alignSelf: "center"
            }}>
              <img src={logo}
                alt="Not Found"
                style={{
                  width: "100%",
                  height: "100%",
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