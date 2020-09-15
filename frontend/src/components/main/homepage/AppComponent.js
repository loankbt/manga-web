import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class AppComponent extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h2 className="app">Download Our Apps</h2>
                    <Row>
                        <Col lg={{ span: 4, offset: 2 }}>
                            <a href="/">
                                <Image
                                    className="item"
                                    src="//cdn.lezhin.com/files/assets/img/app_banner_desktop_android_en.png"
                                    alt="android"
                                    fluid
                                />
                            </a>
                        </Col>
                        <Col lg={{ span: 4 }}>
                            <a href="/">
                                <Image
                                    className="item"
                                    src="//cdn.lezhin.com/files/assets/img/app_banner_desktop_ios_en.png"
                                    alt="android"
                                    fluid
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AppComponent