import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const ListMangaComponent = (props) => {
    console.log(props)
    return (
        <section>
            <Container>
                <h2>{props.title}</h2>
                <Row>
                    <Col lg={2}>
                        <Image
                            src="https://cdn.lezhin.com/v2/comics/4832433259675648/images/tall.webp?updated=1542610801787&width=177"
                            alt="new-release"
                            fluid
                        />
                    </Col>
                    <Col lg={2}>
                        <Image
                            src="https://cdn.lezhin.com/v2/comics/5488055446405120/images/tall.webp?updated=1548658802697&width=177"
                            alt="new-release"
                            fluid
                        />
                    </Col>
                    <Col lg={2}>
                        <Image
                            src="https://cdn.lezhin.com/v2/comics/5375516648931328/images/tall.webp?updated=1566891791334&width=177"
                            alt="new-release"
                            fluid
                        />
                    </Col>
                    <Col lg={2}>
                        <Image
                            src="https://cdn.lezhin.com/v2/comics/6388453403787264/images/tall.webp?updated=1562662842735&width=177"
                            alt="new-release"
                            fluid
                        />
                    </Col>
                    <Col lg={2}>
                        <Image
                            src="https://cdn.lezhin.com/v2/comics/5176816106733568/images/tall.webp?updated=1563344750810&width=177"
                            alt="new-release"
                            fluid
                        />
                    </Col>
                    <Col lg={2}>
                        <Image
                            src="https://cdn.lezhin.com/v2/comics/6424429192282112/images/tall.webp?updated=1542610801787&width=177"
                            alt="new-release"
                            fluid
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ListMangaComponent