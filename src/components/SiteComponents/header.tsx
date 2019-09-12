import React from 'react'
import marvelLogo from '../../assets/logo-marvel.svg'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Col, 
    Row
} from 'reactstrap'


const Header = (): JSX.Element => (
    <Row>
        <Col>
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
                <img src={marvelLogo} />
            </div>
        </Col>
    </Row>
);

export default Header;