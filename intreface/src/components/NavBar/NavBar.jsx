import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>
            Профиль
          </Nav.Link>
          <Nav.Link to="/market" as={Link}>
            Торговая площадка
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
