import React, { Component } from 'react'
import '../../css/Common.css'
import '../../css/Header.css'
import logo from '../../assets/logo.ico'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import { FaList } from 'react-icons/fa'
import ListGroup from 'react-bootstrap/ListGroup'
import Item from 'react-bootstrap'

export default class EpHeaderComponent extends Component {
    render() {
        return (
            <div>
                <Navbar id='ep-header'>
                    <Navbar.Brand href="/">
                        <Nav to='/' className='nav-link'><img src={logo} alt="logo"></img></Nav>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav className='nav-link'><Link to={'/manga/detail/' + this.props.mangaCode}><FaList /></Link></Nav>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}