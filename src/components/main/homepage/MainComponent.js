import React, { Component } from 'react'
import AsideComponent from './AsideComponent'
import NewMangaComponent from './NewMangaComponent'
import ListMangaComponent from './ListMangaComponent'
import AppComponent from './AppComponent'
import FooterComponent from '../../footer/FooterComponent'

class MainComponent extends Component {
    render() {
        return (
            <div>
                <AsideComponent />
                <NewMangaComponent />
                <ListMangaComponent title="New Today"/>
                <ListMangaComponent title="Romance"/>
                <ListMangaComponent title="Fantasy"/>
                <AppComponent />
                <FooterComponent />
            </div>
        )
    }
}

export default MainComponent