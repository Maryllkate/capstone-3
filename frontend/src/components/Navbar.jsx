import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../pages/Login'

import { Link, NavLink } from 'react-router-dom';

import { BsFillCartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

//import Login from '../pages/Login'
//import { Route, Routes } from 'react-router-dom';

function navbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">E-Commerce Store</Navbar.Brand>
            
              <Nav>
                <Nav.Link as = {NavLink} to="/cart"><h3><BsFillCartFill /></h3></Nav.Link>
                <Nav.Link as = {NavLink} to="/login">
                    <h3><BsFillPersonFill /></h3>
                </Nav.Link>
              </Nav>
              {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          </Container>

          
        </Navbar>
      );
};

export default navbar;