import Cart from "./Cart"
import { Card, Carousel, Row } from "react-bootstrap"


const NewArrival = () => {
    const cart = Cart()

    let carItem1 = []
    let carItem2 = []
    let carItem3 = []

    for (let i=0; i<4; i++) {
        carItem1.push(cart[i])
    }

    for (let i=4; i<8; i++) {
        carItem2.push(cart[i])
    }

    for (let i=8; i<12; i++) {
        carItem3.push(cart[i])
    }


    return (
        <Row>
            <Carousel interval='1000'>
                <Carousel.Item>
                    <Row >
                        {carItem1}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row >
                        {carItem1}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row >
                        {carItem3}
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Row>

    )
}

export default NewArrival