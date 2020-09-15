import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import HeaderComponent from '../../header/HeaderComponent'
import MangaComponent from './MangaComponent'
import TitleComponent from '../../header/TitleComponent'

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
            <div>
                <TitleComponent title='Completed manga' />
                <HeaderComponent />
                <Container>
                    <MangaComponent mangas={this.state.mangas}/>
                </Container>
            </div>
        )
    }
}