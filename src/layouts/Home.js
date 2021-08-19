import React, { Component } from 'react'
import { useLocation, Route, Switch, Redirect } from 'react-router-dom'
import Sidebar from 'components/Sidebar/Sidebar'
import routes from 'routes/routes.js'
import sidebarImage from 'assets/img/sidebar-3.jpg'
import Header from 'components/Navbars/Navbar'
import AuthenticatedHeader from 'components/Navbars/NavbarAuthenticated'

function Home() {
  const [image, setImage] = React.useState(sidebarImage)
  const [color, setColor] = React.useState('black')
  const [hasImage, setHasImage] = React.useState(true)
  const location = useLocation()
  const mainPanel = React.useRef(null)
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

  const token = localStorage.getItem('user')
  console.log(token)

  if (token) {
    console.log('authincated...')
    return (
      <div style={{ backgroundColor: '#F4FFEE' }}>
        <AuthenticatedHeader />
        <Switch>
          {getRoutes(routes)}
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
    )
  } else {
    console.log('non authicated...')
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
}

export default Home
