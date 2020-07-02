import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class NewMangaComponent extends Component {
    render() {
        return (
            <section>
                <Container>
                    <h2>New Release</h2>
                    <Row>
                        <Col lg={3}><Image src="https://cdn.lezhin.com/v2/comics/5647579813380096/images/tall.webp?updated=1580716810634&width=277" alt="new-release" fluid/></Col>
                        <Col lg={3}><Image src="https://cdn.lezhin.com/v2/comics/6246910982684672/images/tall.webp?updated=1580346158710&width=277" alt="new-release" fluid/></Col>
                        <Col lg={3}><Image src="https://cdn.lezhin.com/v2/comics/5913498020282368/images/tall.webp?updated=1580176483294&width=277" alt="new-release" fluid/></Col>
                        <Col lg={3}><Image src="https://cdn.lezhin.com/v2/comics/4722526976540672/images/tall.webp?updated=1579158676762&width=277" alt="new-release" fluid/></Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default NewMangaComponent