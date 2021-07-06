import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/users/Login";
import Registration from "./views/users/Registration";
import KrishiBazar from "./views/KrishiBazar";
import Dashboard from "./views/users/Dashboard";
import Index from './views/Index'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Router>
        <Route path="/"><Index/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/register"><Registration/></Route>
        <Route path="/krishiBazar"><KrishiBazar/></Route>
        <Route path="/dashboard"><Dashboard/></Route>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
