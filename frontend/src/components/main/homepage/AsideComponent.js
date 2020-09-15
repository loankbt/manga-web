import React, { Component } from 'react'
import '../../../css/Common.css'
import '../../../css/Main.css'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

class AsideComponent extends Component {
    render() {
        return (
            <Container>
                <aside className="slide">
                    <Carousel interval="1800">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 slide"
                                src="/manga/banner/banner1.jpg"
                                alt="First slide"
                                style={{ maxHeight: 448, maxWidth: 1160 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 slide"
                                src="/manga/banner/banner2.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 slide"
                                src="/manga/banner/banner3.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </aside>
            </Container>
        )
    }
}

export default AsideComponent