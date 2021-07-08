import React, {Component} from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function Navigationbar({routes}){
    const location = useLocation()
    const activeRoute = (routeName) => {
      return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    return(
        <Navbar fixed="top">
            <Nav>
            {routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : activeRoute(prop.layout + prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </Nav>
        </Navbar>
    )
}

export default Navigationbar