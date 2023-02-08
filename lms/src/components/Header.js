import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './style.css'

function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className='Header'>
      <Container>
        <Navbar.Brand href="#logo" className='Logo'> <img src={props.logo} width="232" height="72" alt='none'  className="d-inline-block align-top"/></Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto fs-4.5">
            <Nav.Link className="hover-underline-animation me-auto" href="#home">{props.home}</Nav.Link>
            <Nav.Link className="hover-underline-animation me-auto" href="#lmsPortal">{props.navLink1}</Nav.Link>
            <Nav.Link className="hover-underline-animation me-auto" href="#jobPortal">{props.navLink2}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link  className="hover-underline-animation me-auto  fs-4.5" href="#contactUs">{props.contactUs} </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;