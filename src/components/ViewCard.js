import { Link } from "react-router-dom"
import {
    Card,
    Col,
  } from "react-bootstrap"

function card(logo, name, link, category) {
  localStorage.setItem('searchLink', 'http://127.0.0.1:5000/product/view?category='+category)
    return (
      <Col>
        <Link to={link}>
          <Card href={link}>
            <Card.Body style={{
              height: "100px"
            }}>
              <img src={logo}
                alt="Not Found"
                style={{
                  width: "30%",
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