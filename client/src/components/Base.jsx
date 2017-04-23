import React from 'react';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router-dom';
import { Navbar, NavItem, NavDropDown, MenuItem, Nav, NavDropdown, Jumbotron, Button} from 'react-bootstrap';
import Auth from '../modules/Auth.js';

const Base = ({ children }) => (
    <div>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#">ReactJS</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">Link</NavItem>
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
                    <NavItem eventKey={1}><Link to="/logout">Logout</Link></NavItem>
                </Nav>
            ) : (
                <Nav pullRight>
                    <NavItem eventKey={1}><Link to="/login">Log In</Link></NavItem>
                    <NavItem eventKey={2}><Link to="/signup">Signup</Link></NavItem>
                </Nav>
            )}
            </Navbar.Collapse>
        </Navbar>

    </div>
)


export default Base;