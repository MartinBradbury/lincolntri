import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/lincolntri.jpg";

import "../styles/NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" className="brand">
          <img
            src={Logo}
            alt="Lincoln Triathlon Club logo"
            className="navbar-logo"
          />
          <span className="brand-text">LincolnTri</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/training">Training Sessions</Nav.Link>
            <Nav.Link href="/membership">Membership</Nav.Link>
            <Nav.Link href="/Committee">Committee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
