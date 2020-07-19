import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import MangaComponent from './MangaComponent'
import axios from 'axios'

export default class NewMangaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { mangas: [] };
    }

    componentDidMount() {
        axios.get('/manga/completed/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        mangas: response.data
                    })
                }
            })
    }

    render() {
        return (
            <section>
                <Container>
                    <MangaComponent mangas={this.state.mangas}/>
                </Container>
            </section>
        )
    }
}