import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { StyledHeader } from './HeaderNavBar.styles';
const HeaderNavBar = () => {
  return (
    <StyledHeader>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Your React Colorful Photos App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledHeader>
  );
};

export default HeaderNavBar;
