import React, { Component } from "react"
import { useLocation, Route, Switch } from "react-router-dom"
import Sidebar from "components/Sidebar/Sidebar"
import routes from "routes/routes.js"
import sidebarImage from "assets/img/sidebar-3.jpg"

function Home() {
  const [image, setImage] = React.useState(sidebarImage)
  const [color, setColor] = React.useState("green")
  const [hasImage, setHasImage] = React.useState(true)
  const location = useLocation()
  const mainPanel = React.useRef(null)
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
  return (
    <div style={{ backgroundColor: "#F4FFEE" }}>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home