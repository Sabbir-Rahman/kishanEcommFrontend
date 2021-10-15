import Cart from "./Cart"
import { Card, Carousel, Row } from "react-bootstrap"


const NewArrival = () => {
    const cart = Cart()
    let newArrival = []
    for(let i=0; i<8; i++){
        newArrival.push(cart[i])
    }
    return (
        <>
        {newArrival}
        </>
    )
}

export default NewArrival