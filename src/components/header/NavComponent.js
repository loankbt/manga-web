import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../../css/Header.css'
import { Link } from "react-router-dom";

class NavComponent extends Component {
    render() {
        return (
            <div>
                <Navbar id="nav">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/on-going" className="nav-link">On Going</Link>
                        <Link to="/completed" className="nav-link">Completed</Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavComponent