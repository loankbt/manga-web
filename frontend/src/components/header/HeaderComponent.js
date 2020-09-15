import React, { Component } from 'react'
import '../../css/Common.css'
import '../../css/Header.css'
import logo from '../../assets/logo.ico'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"

class HeaderComponent extends Component {
    render() {
        return (
            <Container>
                <Navbar id="nav">
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo"></img>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/on-going" className="nav-link">On Going</Link>
                        <Link to="/completed" className="nav-link">Completed</Link>
                    </Nav>
                </Navbar>
            </Container>
        )
    }
}

export default HeaderComponent