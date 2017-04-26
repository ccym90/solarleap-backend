import React from 'react';
import {Navbar, MenuItem, NavItem, Nav, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {

  render() {
    return (
      <Navbar fixedTop inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Video Uploader</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Library</NavItem>
            <NavItem eventKey={2} href="#">Record</NavItem>
            <NavItem eventKey={2} href="#">Upload</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
