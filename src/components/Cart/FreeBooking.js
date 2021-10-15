import Cart from "./Cart"

const FreeBooking = () => {
    const cart = Cart()
    let freeBooking = []
    for(let i=0; i<8; i++){
        freeBooking.push(cart[i])
    }
    return (
        <>
        {freeBooking}
        </>
    )
}

export default FreeBooking