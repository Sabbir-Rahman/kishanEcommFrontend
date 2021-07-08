export const CartReducer = (state, action) => {

    const {shoppingCart, totalPrice, quantity} = state

    let product
    let index
    let updatedPrice
    let updatedQuantity

    switch (action.type){
        case 'ADD_TO_CART':
            const check = shoppingCart.find(cart => cart.id === action.id)
            if (check) {
                return {shoppingCart: [...shoppingCart], totalPrice, message: "This product is already in the cart!", quantity}
            } else {
                product = action.products.find(product => product.id === action.id)
                product['quantity'] = 1
                updatedQuantity = quantity + 1

                return {shoppingCart: [product, ...shoppingCart], totalPrice: totalPrice + product.price, message: "", quantity: updatedQuantity}
            }
            break

        case 'DELETE_PRODUCT':
            const filtered = shoppingCart.filter(cart => cart.id !== action.id)
            product = shoppingCart.find(cart => cart.id === action.id)
            updatedPrice = totalPrice - product.price * product.quantity
            updatedQty = quantity - product.quantity
            return {shoppingCart: [...filtered], totalPrice: updatedPrice, message: '', quantity: updatedQuantity}
            break

        case 'INC':
            console.log('Inc run');
            product = shoppingCart.find(product => product.id === action.id);
            index = shoppingCart.findIndex(product => product.id === action.id);
            product.quantity = product.quantity + 1;
            updatedQuantity = quantity + 1;
            totalPrice = totalPrice + product.price;
            console.log(product, totalPrice);
            shoppingCart[index] = product;
            return {shoppingCart: [...shoppingCart], totalPrice: totalPrice, message: '', quantity: updatedQuantity}
            break
        
        case 'DEC': 
            product = shoppingCart.find(product => product.id === action.id);
            index = shoppingCart.findIndex(product => product.id === action.id);
            if(product.qty > 1){
               console.log('Yes graer');
                product.quantity = product.quantity - 1;
                updatedPrice = totalPrice - product.price;
                updatedQuantity = quantity - 1;
                shoppingCart[index] = product;
                console.log("afer dec",shoppingCart);
                return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, message: '', quantity: updatedQuantity};
            } else {
                return {shoppingCart: [...shoppingCart], totalPrice: totalPrice, message: '', quantity: quantity}
           }
           break
        
        case 'EMPTY':
            return {shoppingCart: [], totalPrice: 0, message: "", quantity: 0}
            break
        default:
            return state
    }
}