import React, { useState } from 'react';
import {Navbar,NavDropdown,Nav,Container} from "react-bootstrap"
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
const Header = () => {
    return (
      <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='navbar'>Home</Link>
            <NavDropdown title="Product" id="basic-nav-dropdown" className='drop'>
              <NavDropdown.Item href="#action/3.1">Sell</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Buy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Explore</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Plan" id="basic-nav-dropdown" className='drop'>
              <NavDropdown.Item href="#action/3.1">Guide</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Recommend
              </NavDropdown.Item>
              
            </NavDropdown>
            <Link to="/SetDate" className='navbar'>SetDate</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    );
}

export default Header
