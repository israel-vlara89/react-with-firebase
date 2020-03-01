import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { AuthUserContext } from '../Session';

const buttonStyle = {
    backgroundColor: "green"
};

const marginNav = {
    marginLeft: "80px"
};

const navColor = {
    backgroundColor: "D6320F"
};

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? (
                    <NavigationAuth authUser = {authUser} />
                ) : (
                    <NavigationNonAuth />
                )
            }
        </AuthUserContext.Consumer>
    </div>
)

const NavigationAuth = ({ authUser }) => (
    <Navbar  style={navColor} bg="light" expand="lg" inverse fluid>
        <Navbar.Brand href="#home">Forstheos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={marginNav}>
                <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
                <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>
                <Nav.Link href={ROUTES.ABOUT}>About</Nav.Link>
                <Nav.Link href={ROUTES.CONTACT}>Contact</Nav.Link>
                <Nav.Link href={ROUTES.ACCOUNT}>Account</Nav.Link>
                {!!authUser.roles[ROLES.ADMIN] && (
                    <Nav.Link href={ROUTES.ADMIN}>Admin</Nav.Link>
                )}
            </Nav>
            <Form inline>
                <Button style={buttonStyle} variant="outline-success"><SignOutButton/></Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
);

const NavigationNonAuth = () => (
    <Navbar style={navColor} bg="light" expand="lg" inverse fluid>
        <Navbar.Brand href="#home">Forstheos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={marginNav}>
                <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
                <Nav.Link href={ROUTES.ABOUT}>About</Nav.Link>
                <Nav.Link href={ROUTES.CONTACT}>Contact</Nav.Link>
                <Nav.Link href={ROUTES.SIGN_IN}>Sign In</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation;