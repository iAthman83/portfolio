import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const FooterComponent = () => {
  const thisYear = new Date().getFullYear();
  return (
    <Navbar sticky="bottom" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Copyright &#169; {thisYear}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Linkedin</Nav.Link>
          <Nav.Link href="#features">YouTube</Nav.Link>
          <Nav.Link href="#pricing">Github</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FooterComponent;
