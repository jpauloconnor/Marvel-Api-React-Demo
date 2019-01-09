import React from 'react';
import logo from '../logo.svg';
import { Nav, NavItem, NavLink } from 'reactstrap';


const Header = () => (
    <header>
        <div className="header-banner">
            <h1>Marvel Comic Search</h1>
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