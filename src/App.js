import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./views/users/Login";
import Registration from "./views/users/Registration";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Registration} />
      </Router>

      <Footer />
    </div>
  );
};

export default App;
