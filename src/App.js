import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Login from "./views/users/Login";
import Registration from "./views/users/Registration";
import KrishiBazar from "./views/KrishiBazar";
import Dashboard from "./views/users/Dashboard";
import Index from './views/Index'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/krishiBazar" component={KrishiBazar} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
