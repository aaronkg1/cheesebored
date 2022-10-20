import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const SiteNavbar = () => {
  return (
    <Navbar expand="sm" bg="dark">
      <Container>
        <Navbar.Brand href="/">🧀</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="btn btn-warning p-2" href="/cheeses">
            Discover Cheeses
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
