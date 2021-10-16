import React from "react"
import { useLocation, Route, Switch, Redirect } from "react-router-dom"
import Header from "components/Navbar"
import Sidebar from "components/Sidebar"
import routes from "routes/dashboardRoutes.js"
import sidebarImage from "assets/img/sidebar-3.jpg"
import { Container } from "react-bootstrap"

function User() {
  const [image, setImage] = React.useState(sidebarImage)
  const [color, setColor] = React.useState("black")
  const [hasImage, setHasImage] = React.useState(true)
  const location = useLocation()
  const mainPanel = React.useRef(null)
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null
      }
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    mainPanel.current.scrollTop = 0
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open")
      var element = document.getElementById("bodyClick")
      element.parentNode.removeChild(element)
    }
  }, [location])

  const token = localStorage.getItem('user')
  let redirection
  if (token) {
    redirection = <Switch>{getRoutes(routes)}</Switch>
  } else {
    <Redirect to='/home' />
  }

  return (
    <>
      <Container className="wrapper" style={{ backgroundColor: '#F4FFEE' }} fluid>
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <Container className="main-panel" ref={mainPanel} fluid>
          <Header />
          <Container className="content" fluid>
            {redirection}
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default User