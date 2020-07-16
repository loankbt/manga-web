import React, { Component } from 'react'
import '../../css/Common.css'
import '../../css/Header.css'
import NavComponent from './NavComponent'
import Container from 'react-bootstrap/Container'

class HeaderComponent extends Component {
    render() {
        return (
            <Container>
                <NavComponent />
            </Container>
        )
    }
}

export default HeaderComponent