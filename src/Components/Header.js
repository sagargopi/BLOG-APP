import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// To use routing functionalities
import { Link } from 'react-router-dom';
import '../index.css';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <span style={{ cursor: 'pointer' }} onClick={() => console.log('Brand clicked!')}>
                                MERN Stack CRUD Operations
                            </span>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem as={Link} to="/" style={{ cursor: 'pointer' }}>
                            Home
                        </NavItem>
                        <NavItem as={Link} to="/addemployee" style={{ cursor: 'pointer' }}>
                            Add New Employee
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;
