import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import '../../../css/Common.css'
import axios from 'axios'

export default class DetailMangaComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mangaCode: this.props.match.params.mangaCode,
            manga: {},
            episodes: []
        }
    }

    componentDidMount() {
        Promise.all([
            axios.get('/manga/detail/' + this.state.mangaCode),
            axios.get('/episode/list/' + this.state.mangaCode)
        ]).then(([result1, result2]) => {
            if (result1.data.length > 0 && result2.data.length > 0) {
                this.setState({
                    manga: result1.data,
                    episodes: result2.data
                })
            }
        })
    }

    render() {
        const manga = this.state.manga
        const episodes = this.state.episodes
        const items = []
        let mangaIntro = []

        if (manga.length > 0) {
            mangaIntro = [
                <Col lg={4} key={manga[0]._id}>
                    <Image src={"/manga/" + manga[0].path} alt={manga[0].name} fluid />
                    <h3 className="single-title">{manga[0].name}</h3>
                    <h5><span className="header">Creator: </span>{manga[0].author}</h5>
                    <h6><span className="header">Genre: </span>{manga[0].type.charAt(0).toUpperCase() + manga[0].type.slice(1)}</h6>
                    <h6><span className="header">About: </span>{manga[0].about}</h6>
                </Col>
            ]
        }

        episodes.forEach((ep) => {
            const moment = require('moment')

            items.push(
                <Row className="single-ep" key={ep._id}>
                    <Col lg={2}>
                        <Image src={"/episode/cover/" + ep.cover} alt={ep.name} fluid />
                    </Col>

                    <Col>
                        <div>{ep.name}</div>
                        <div><small>{moment(ep.createdAt).format('DD-MM-YYYY')}</small></div>
                    </Col>
                </Row>)
        })

        return (
            <Container className="container">
                <Row>
                    {mangaIntro}

                    <Col lg={8} className="epList">
                        {items}
                    </Col>
                </Row>
            </Container>
        )
    }
}