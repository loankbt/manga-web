import React, { Component } from 'react'
import '../../../css/Common.css'
import '../../../css/Main.css'
import Container from 'react-bootstrap/Container'

class AsideComponent extends Component {
    render() {
        return (
            <Container>
                <aside className="slide">
                    Slider's area
                </aside>
            </Container>
        )
    }
}

export default AsideComponent