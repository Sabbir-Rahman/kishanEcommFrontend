export const CartReducer = (state, action) => {

    const {shoppingCart, totalPrice, quantity} = state

    let product
    let index
    let updatedPrice
    let updatedQuantity

    switch (action.type){
        case 'ADD_TO_CART':
            const check = shoppingCart.find(product => product.id === action.id)
            if (check) {
                return state
            } else {
                product = action.product
                product['quantity'] = quantity + 1
                updatedQuantity = quantity+1
                updatedPrice = totalPrice + product.price

                return {shoppingCart: [product, ...shoppingCart], totalPrice: updatedPrice, quantity: updatedQuantity}
            }
            break
            default:
                return state
    }
}