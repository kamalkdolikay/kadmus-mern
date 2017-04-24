import React from 'react';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router-dom';
import { Navbar, NavItem, NavDropDown, MenuItem, Nav, NavDropdown, Jumbotron, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Auth from '../modules/Auth.js';

const Base = ({ children }) => (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#">ReactJS</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/todo">
                    <NavItem eventKey={1}>Todo</NavItem>
                </LinkContainer>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
            {Auth.isUserAuthenticated() ? (
                <Nav pullRight>
                    <LinkContainer to="/logout">
                        <NavItem eventKey={1}>Logout</NavItem>
                    </LinkContainer>
                </Nav>
            ) : (
                <Nav pullRight>
                    <LinkContainer to="/login">
                        <NavItem eventKey={1}>Log In</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                        <NavItem eventKey={2}>Signup</NavItem>
                    </LinkContainer>
                </Nav>
            )}
            </Navbar.Collapse>
        </Navbar>
)


export default Base;