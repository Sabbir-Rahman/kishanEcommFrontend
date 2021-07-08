import React, {Component} from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { FormControl, Button } from 'react-bootstrap'


function Navigationbar({routes, authentication}){
    const location = useLocation()
    const activeRoute = (routeName) => {
      return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }


    return(
      <>
      <br />
      <Navbar bg="green-400" variant="light">
        <Navbar.Brand href="#home">কিষাণ</Navbar.Brand>
        <Nav className="mr-auto">
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
        </Nav>
        <Form inline>
        <Nav>
            {authentication.map((prop, key) => {
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
        </Form>
      </Navbar>
        <Navbar fixed="top" varient="light">
            <Form inline>
            
          </Form>
          <Form inline>
          
          </Form>
        </Navbar>
        </>
    )
}

export default Navigationbar