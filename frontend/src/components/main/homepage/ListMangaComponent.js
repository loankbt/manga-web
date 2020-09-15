import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../../css/Common.css'

export default class ListMangaComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { mangaList: [] }
    }

    componentDidMount() {
        axios.get('/manga/type/' + this.props.type)
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

        const filtered = mangaList.filter((value, index, array) => {
            return index < 4
        })

        filtered.forEach(manga => {
            list.push(
                <Col key={manga._id} lg={2}>
                    <Link
                        to={{
                            pathname: "/manga/detail/" + manga.code,
                            state: manga
                        }}>
                        <Image src={"/manga/" + manga.path} fluid />
                        <span className="manga-title">{manga.name}</span>
                    </Link>
                </Col>
            )
        })

        return (
            <section>
                <Container>
                    <h2 className="section-title">{this.props.title}</h2>
                    <Row>{list}</Row>
                </Container>
            </section>
        )
    }
}