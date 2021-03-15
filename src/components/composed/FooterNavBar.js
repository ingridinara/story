import React from 'react';
import { Navbar } from 'react-bootstrap';
import { StyledFooter } from './FooterNavBar.styles';
const FooterNavBar = () => {
  return (
    <StyledFooter>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          Thank you for visiting
          <strong> Your Colorful Photos App Footer </strong>. &copy; All rights
          reserved.{' '}
        </Navbar.Brand>
      </Navbar>
    </StyledFooter>
  );
};

export default FooterNavBar;
