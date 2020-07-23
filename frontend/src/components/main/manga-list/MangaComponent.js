import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

export default class MangaComponent extends Component {
    render() {
        const mangas = this.props.mangas
        const items = []

        mangas.forEach(manga => {
            items.push(
                <Col lg={2} key={manga._id}>
                    <Link to={{
                        pathname: "/manga/detail/" + manga.code,
                        title: manga.name
                    }}>
                        <Image
                            src={"/manga/" + manga.path}
                            alt={manga.name}
                            fluid
                        />
                        <span className="manga-title">{manga.name}</span>
                    </Link>
                </Col>)
        })

        return (
            <Row>
                {items}
            </Row>
        )
    }
}