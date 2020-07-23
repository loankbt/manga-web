import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default class TitleComponent extends Component {
    render() {
        const title = this.props.title

        return (
            <Helmet>
                <title>{title ? title : 'Webtoon' }</title>
            </Helmet>
        )
    }
}