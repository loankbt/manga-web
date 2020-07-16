import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../../css/Common.css'

export default class NewMangaComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { mangaList: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/manga/new')
            .then(result => {
                if (result.data.length > 0) {
                    this.setState({
                        mangaList: result.data
                    })
                }
            })
    }

    render() {
        const mangaList = this.state.mangaList
        const list = []

        mangaList.forEach(manga => {
            list.push(
                <Col key={manga._id} lg={3}>
                    <Link
                        className="new-release"
                        to={{
                            pathname: "/manga/detail/" + manga.code,
                            state: manga
                        }}>
                        <Image src={"http://localhost:5000/manga/" + manga.path} fluid />
                        <span className="manga-title">{manga.name}</span>
                    </Link>
                </Col>
            )
        })

        return (
            <Container>
                <h2 className="section-title">New Release</h2>
                <Row>{list}</Row>
            </Container>
        )
    }
}