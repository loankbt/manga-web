import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import axios from 'axios'
import '../../../css/Common.css'
import EpHeaderComponent from '../../header/EpHeaderComponent'
import TitleComponent from '../../header/TitleComponent'

export default class EpComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            epId: this.props.match.params.epId,
            mangaCode: this.props.match.params.mangaCode,
            images: []
        }
    }

    componentDidMount() {
        axios.get('/episode/' + this.state.epId)
            .then(result => {
                if (result.data.length > 0) {
                    this.setState({
                        images: result.data
                    })
                }
            })
    }

    render() {
        const images = this.state.images
        const items = []
        images.forEach(image => {
            console.log('/' + image.epId + '/' + image.order + '.jpg')
            items.push(
                <img className="shown-image" src={'/image/' + image.epId + '/' + image.order + '.jpg'} key={image._id} style={{ maxWidth: 720 }}></img>
            )
        })
        return (
            <div>
                <TitleComponent />
                <EpHeaderComponent mangaCode={this.state.mangaCode}/>
                <Container className="container">
                    {items}
                    {/* <Row>
                        {mangaIntro}

                        <Col lg={8} className="epList">
                            {items}
                        </Col>
                    </Row> */}
                </Container>
            </div>
        )
    }
}