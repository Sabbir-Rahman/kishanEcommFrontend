import React from "react"
import {
  Container,
  Row,
} from "react-bootstrap"
import bg from "../assets/img/homepage/BG.png"
import kishanLogo from "../assets/img/homepage/kishan.png"

function Banner(component){
    return(
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
            {component}
        </Row>
      </Container>
    )
}

export default Banner