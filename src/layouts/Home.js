import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from 'routes/routes.js'
import Header from 'components/Navbar'
import FooterPage from 'components/Footer'
import { Container } from 'react-bootstrap'

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
      <Container style={{ backgroundColor: '#F4FFEE' }} fluid>
        <Header />
        <Switch>
          {getRoutes(routes)}
          <Redirect from='/' to='/home' />
        </Switch>
      </Container>
    )
  
}

export default Home
