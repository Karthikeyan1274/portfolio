import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="transparent" expand="md" data-bs-theme="transparent">
        <Container>
          <Navbar.Brand href="#intro">Karthi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              
              
              <Nav.Link href="#intro" style={{ fontFamily: 'cursive' }}>Intro</Nav.Link>
              <Nav.Link href="#edu" style={{ fontFamily: 'cursive' }}>Edu</Nav.Link>
              <Nav.Link href="#skill" style={{ fontFamily: 'cursive' }}>Skill</Nav.Link>
              <Nav.Link href="#about" style={{ fontFamily: 'cursive' }}>About</Nav.Link>
              <Nav.Link href="#contact" style={{ fontFamily: 'cursive' }}>Contact Me</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;
