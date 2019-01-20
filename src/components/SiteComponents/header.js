import React from 'react';
import { marvelLogo } from "../../assets/logo-marvel.svg";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
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
            <img src={marvelLogo} height="60px" alt={"Marvel Image"} />
        </div>
    </div>
);

export default Header;