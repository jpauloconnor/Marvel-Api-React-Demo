import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { marvelLogo } from "../assets/logo-marvel.svg";
const Header = () => (
    <header>
        <div className="header-banner">
            <img src={marvelLogo} alt="Home logo" height="60px" />
        </div>
        <Nav>
            <NavItem>
                <NavLink href="https://developer.marvel.com/">API Docs</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://therealstanlee.com/">Stan Lee</NavLink>
            </NavItem>
        </Nav>
    </header>
);

export default Header;