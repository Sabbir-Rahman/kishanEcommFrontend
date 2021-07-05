import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./views/users/Login";
import Registration from "./views/users/Registration";
import KrishiBazar from "./views/KrishiBazar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/krishiBazar" component={KrishiBazar} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
