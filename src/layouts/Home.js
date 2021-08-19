import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from 'routes/routes.js'
import Header from 'components/Navbars/Navbar'

function Home() {
  
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '') {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        )
      } else {
        return null
      }
    })
  }


    return (
      <div style={{ backgroundColor: '#F4FFEE' }}>
        <Header />
        <Switch>
          {getRoutes(routes)}
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
    )
  
}

export default Home
