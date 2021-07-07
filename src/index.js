import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import User from "layouts/User";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/user" render={(props) => <User {...props} />} />
      <Redirect from="/" to="/user/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
