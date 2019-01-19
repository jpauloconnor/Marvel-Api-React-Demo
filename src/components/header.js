import React from 'react';
import { marvelLogo } from "../assets/logo-marvel.svg";
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Jumbotron,
    Button
} from 'reactstrap';

const Header = () => (
    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Marvel API Search Tool</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://therealstanlee.com/">Stan Lee</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://developer.marvel.com/">API Docs</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        <div className="header-banner">
            <img src={marvelLogo} alt="Home logo" height="60px" />
        </div>
        <div>
            <Jumbotron>
                <h1 className="display-3">Search the Marvel API</h1>
                <p className="lead">This is a simple search tool for the Marvel API. Enter your favorite hero and villain and we'll find books for you with those characters in them.</p>
            </Jumbotron>
        </div>
    </div>
);

export default Header;