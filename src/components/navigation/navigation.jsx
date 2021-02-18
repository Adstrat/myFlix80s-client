import React from 'react';
import './navigation.scss'
import { Nav, Navbar } from 'react-bootstrap';


export class Navigation extends React.Component {

  onLogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log('logged out successfully');
    window.open('/', '_self');
  }

  render() {
    return (
      <Navbar className="navbar" variant="dark" expand="md">
        <Navbar.Brand href="#home">myFlix80s</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
            <Nav.Link onClick={() => this.onLogOut()}>LogOut</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}