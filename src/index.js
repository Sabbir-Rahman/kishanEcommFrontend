import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/animate.min.css"
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0"
import "./assets/css/demo.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "assets/css/App.css"

import User from "layouts/User"
import Home from "layouts/Home"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/user" render={(props) => <User {...props} />} />
      <Route path="/" render={(props) => <Home {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);