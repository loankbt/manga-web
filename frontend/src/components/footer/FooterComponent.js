import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../css/Footer.css'
import ListGroup from 'react-bootstrap/ListGroup'


export default class FooterComponent extends Component {
    render() {
        return (
            <footer className="end">
                <Container>
                    <Row>
                        <Col lg={3} style={{ fontWeight: "bold" }}>
                            <h4>Webtoon Corporation</h4>
                        </Col>
                        <Col lg={9}>
                            <ListGroup className="footer-item" horizontal>
                                <ul>
                                    <a href="/" className="footer-item">About</a>
                                </ul>
                                <ul>
                                    <a href="/" className="footer-item">Term Of Use</a>

                                </ul>
                                <ul>
                                    <a href="/" className="footer-item">Privacy Policy</a>

                                </ul>
                                <ul>
                                    <a href="/" className="footer-item">Customer Support</a>

                                </ul>
                            </ListGroup>
                            <ListGroup>
                                <ul>All comics published by Webtoon Corporation are protected by copyright.</ul>
                                <ul>Contact us contact@webtoon.com</ul>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </footer >
        )
    }
}