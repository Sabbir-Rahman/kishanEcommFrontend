import React, {useState, useEffect} from 'react'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Products from "../Components/Products/Products"
import {commerce} from "../lib/commerce"
import Navbar from '../Components/Navbar/NavbarEcom/Navbar';
import Cart from '../Components/Cart/Cart'
import Footer from '../Components/Footer/Footer'

const KrishiBazar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
  
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
  
      setProducts(data);
    };
  
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    };
  
    const handleAddToCart = async (productId, quantity) => {
      const item = await commerce.cart.add(productId, quantity);
  
      setCart(item.cart);
    };
  
    const handleUpdateCartQty = async (lineItemId, quantity) => {
      const response = await commerce.cart.update(lineItemId, { quantity });
  
      setCart(response.cart);
    };
  
    const handleRemoveFromCart = async (lineItemId) => {
      const response = await commerce.cart.remove(lineItemId);
  
      setCart(response.cart);
    };
  
    const handleEmptyCart = async () => {
      const response = await commerce.cart.empty();
  
      setCart(response.cart);
    };
  
  
    useEffect(() => {
      fetchProducts();
      fetchCart();
    }, []);
  
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    return(
        <div style={{backgroundColor: "#F4FFEE"}}>
                <Router>
                    <div style={{ display: 'flex' }}>
                        <CssBaseline />
                        <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
                        <Switch>
                        <Route exact path="/krishiBazar">
                            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
                        </Route>
                        <Route exact path="/cart">
                            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
                        </Route>
                        <Route path="/checkout" exact>
                        </Route>
                        </Switch>
                    </div>
                </Router>
                <Footer />
        </div>    
    )
}

export default KrishiBazar