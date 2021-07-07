import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";

function MainNavbar() {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
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
          </Nav>
          <Nav className="ml-auto" navbar>
            <Nav.Item>
              <Nav.Link href="/register">
                <span className="no-icon">যোগ দিন</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/user/login">
                <span className="no-icon">প্রবেশ করুন</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
