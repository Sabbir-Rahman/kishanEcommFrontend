import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./views/users/Login";
import Registration from "./views/users/Registration";
import KrishiBazar from "./views/KrishiBazar";
import Dashboard from "./views/users/Dashboard";
import Index from './views/Index'

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
      </Router>
    </div>
  )
}

export default App;
