import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="brand">
            <Link to="/" className="nav nav-brand">
              Program With Abu
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/" className="nav nav-links">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="nav nav-links">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" className="nav nav-links">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/portfolio" className="nav nav-links">
                  Portfolio
                </Link>
              </Nav.Link>
            </Nav>
            <Button variant="outline-success">Get Started</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
