import Cart from "./Cart"

const NewArrival = () => {
    const cart = Cart()
    let newArrival = []
    for(let i=0; i<10; i++){
        newArrival.push(cart[i])
    }
    return (
        <>
        {newArrival}
        </>
    )
}

export default NewArrival