import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../css/Footer.css'

export default class FooterComponent extends Component {
    render() {
        return (
            <footer className="end">
                <Container>
                    <Row>
                        <Col lg={3}>
                            Company's name & Logo
                        </Col>
                        <Col lg={9}>
                            Other Information
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}