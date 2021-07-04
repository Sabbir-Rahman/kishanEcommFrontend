import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./views/users/Login";
import Registration from "./views/users/Registration";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
      </Router>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
