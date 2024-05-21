import React from "react";
import { DropletFill } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarMain() {
  return (
    <Navbar bg="white" data-bs-theme="light" style={{ opacity: ".9" }}>
      <Container className="container-nav-home">
        <Navbar.Brand href="/" className="brand">
          {" "}
          <DropletFill
            size={30}
            color="#e66465"
            style={{ marginRight: "1rem" }}
          />{" "}
          Blood Bank Inventory System
        </Navbar.Brand>
        <Nav className="me-auto nav-menu">
          <Nav.Link href="/" className="nav-item">
            Home
          </Nav.Link>
          <Nav.Link href="/services" className="nav-item">
            Services
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
  );
}

export default NavBarMain;
