import React from "react"
import {
  Container,
  Row,
} from "react-bootstrap"
import kishanLogo from "../assets/img/homepage/kishan.png"

function Banner(component, background){
    return(
        <Container fluid style={{ backgroundImage: `url(${background})`,
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
                              marginTop: "0%",
                              marginLeft: "auto",
                              marginRight: "10px",
                              display: "block",
                            }}
          />
        </Row>
        <Row style={{ marginTop: "5%",
                      marginLeft: "5%",
                      marginRight: "5%",
                      position: "center",}}>
            {component}
        </Row>
      </Container>
    )
}

export default Banner