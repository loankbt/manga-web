import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../../css/Header.css'

class NavComponent extends Component {
    render() {
        return (
            <div>
                <Navbar id="nav">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">New</Nav.Link>
                        <Nav.Link href="#features">Popular</Nav.Link>
                        <Nav.Link href="#pricing">Completed</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavComponent