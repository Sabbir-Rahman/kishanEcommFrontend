import React, { Component } from "react"
import Navbar from 'components/Navbars/TrialNavbar'
import routes from "routes/trialRoutes.js"
import authenticationRoutes from "routes/authentication"
import { useLocation, Route, Switch } from "react-router-dom"
function Trial() {

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
          if (prop.layout === "") {
            return (
              <Route
                path={prop.layout + prop.path}
                render={(props) => <prop.component {...props} />}
                key={key}
              />
            )
          } else {
            return null;
          }
        })
      }

    return (
        <>
        <Navbar routes={routes} authentication={authenticationRoutes} />
        <div style={{ backgroundColor: "#F4FFEE"}}>
            <Switch>{getRoutes(routes)}</Switch>
            <Switch>{getRoutes(authenticationRoutes)}</Switch>
        </div>
        </>
    );
}

export default Trial