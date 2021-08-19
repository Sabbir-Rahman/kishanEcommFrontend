import React from 'react'
import { useLocation } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'

function Header() {

    const location = useLocation();
    const mobileSidebarToggle = (e) => {
      e.preventDefault()
      document.documentElement.classList.toggle("nav-open");
      var node = document.createElement("div")
      node.id = "bodyClick"
      node.onclick = function () {
        this.parentElement.removeChild(this)
        document.documentElement.classList.toggle("nav-open");
      }
      document.body.appendChild(node);
    }

    function logout() {
        localStorage.clear()
      }

    const token = localStorage.getItem('user')
    let menu = []
    if (token) {
        menu = <NavDropdown title='মেনু' id='basic-nav-dropdown'>
        <NavDropdown.Item href='/logout' onClick={logout}>
          লগ আউট
        </NavDropdown.Item>
        <NavDropdown.Item href='/user/dashboard'>
          ড্যাশবোর্ড
        </NavDropdown.Item>
      </NavDropdown>
    } else {
        menu = <NavDropdown title="মেনু" id="basic-nav-dropdown">
        <NavDropdown.Item href="/login">লগ ইন</NavDropdown.Item>
        <NavDropdown.Item href="/register">রেজিস্ট্রেশন</NavDropdown.Item>
    </NavDropdown>
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid>
            <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
            <Button
                variant="dark"
                className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
                onClick={mobileSidebarToggle}
            >
                <i className="fas fa-ellipsis-v"></i>
            </Button>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav mr-auto" navbar>
                <Nav.Item>
                <Nav.Link href="/">
                    <span className="no-icon">মূল পাতা</span>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/krishi-bazar">
                    <span className="no-icon">কৃষি বাজার</span>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/krishi-forum">
                    <span className="no-icon">কৃষি ফোরাম</span>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/fosholer-doctor">
                    <span className="no-icon">ফসলের ডাক্তার</span>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                </Nav.Item>
            </Nav>
            <Nav className="ml-auto" navbar>
                <Nav.Item>
                {menu}
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Header