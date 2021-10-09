import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'

function Header() {
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

    function navLinks(href, name) {

        return (
            <Nav.Item>
                <Nav.Link href={href}>
                    <span className="no-icon">{name}</span>
                </Nav.Link>
            </Nav.Item>
        )

    }

    const token = localStorage.getItem('user')
    const role = localStorage.getItem('user_role')
    let menu = []
    if (token) {
        if (role == '"admin"') {
            menu = <NavDropdown title='মেনু' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/logout' onClick={logout}>
                    লগ আউট
                </NavDropdown.Item>
            </NavDropdown>
        } else {
            menu = <NavDropdown title='মেনু' id='basic-nav-dropdown'>
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