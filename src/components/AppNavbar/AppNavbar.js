import { NavLink } from 'react-router-dom';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>React-app-demo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/basics" className="nav-link" activeClassName="active">
            Basics
          </NavLink>
          <NavLink to="/users" className="nav-link" activeClassName="active">
            Users
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}