import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
          <Navbar.Brand href="#logo"> <img src={props.logo} width="232" height="72" className="d-inline-block align-top"/></Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{props.home}</Nav.Link>
            <Nav.Link href="#lmsPortal">{props.navLink1}</Nav.Link>
            <Nav.Link href="#jobPortal">{props.navLink2}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#contactUs">{props.contactUs} </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;