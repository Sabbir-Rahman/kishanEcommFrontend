import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./views/users/Login"
import Registration from "./views/users/Registration"
import KrishiBazar from "./views/KrishiBazar"
import Dashboard from "./views/users/Dashboard"
import Index from './views/Index'
import { About } from "./Components/about"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

const App = () => {
  if (window.location.pathname === "/")
    return(
      <div>
        <Index/>
      </div>
  ) 
  return (
    <div>
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Registration} />
        <Route path="/krishiBazar"><KrishiBazar/></Route>
        <Route path="/dashboard"><Dashboard/></Route>
        <Route path="/about">
          <Navbar />
          <About />
          <Footer />
        </Route>
      </Router>
    </div>
  )
}

export default App;
