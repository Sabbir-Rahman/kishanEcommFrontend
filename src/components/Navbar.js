import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'

function Header() {

    const token = localStorage.getItem('user')
    const role = localStorage.getItem('user_role')
    let menu = []
    if (token) {
        if (role == '"admin"') {
            menu = <NavDropdown title={localStorage.getItem('username').replace(/['"]+/g, '')} id='basic-nav-dropdown'>
                <NavDropdown.Item href='/admin'>
                    ড্যাশবোর্ড
                </NavDropdown.Item>
                <NavDropdown.Item href='/logout' onClick={logout}>
                    লগ আউট
                </NavDropdown.Item>
            </NavDropdown>
        } else {
            menu = <NavDropdown title={localStorage.getItem('username').replace(/['"]+/g, '')} id='basic-nav-dropdown'>
                <NavDropdown.Item href='/logout' onClick={logout}>
                    লগ আউট
                </NavDropdown.Item>
                <NavDropdown.Item href='/user/dashboard'>
                    ড্যাশবোর্ড
                </NavDropdown.Item>
            </NavDropdown>
        }
    } else {
        menu = <NavDropdown title="মেনু" id="basic-nav-dropdown">
            <NavDropdown.Item href="/login">লগ ইন</NavDropdown.Item>
            <NavDropdown.Item href="/register">রেজিস্ট্রেশন</NavDropdown.Item>
        </NavDropdown>
    }

    function logout() {
        localStorage.clear()
    }

    function navLinks(href, name) {
        return (
            <Nav.Item>
                <Nav.Link href={href}>
                    <span className="no-icon">{name}</span>
                </Nav.Link>
            </Nav.Item>
        )

    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container fluid>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav mr-auto" navbar>
                        {navLinks("/", "মূলপাতা")}
                        {navLinks("/krishi-bazar", "কৃষি বাজার")}
                        {navLinks("/krishi-forum", "কৃষি ফোরাম")}
                        {navLinks("/fosholer-doctor", "ফসলের ডাক্তার")}
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