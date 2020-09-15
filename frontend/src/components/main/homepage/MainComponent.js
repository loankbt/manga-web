import React, { Component } from 'react'
import AsideComponent from './AsideComponent'
import NewMangaComponent from './NewMangaComponent'
import ListMangaComponent from './ListMangaComponent'
import AppComponent from './AppComponent'
import HeaderComponent from '../../header/HeaderComponent'
import TitleComponent from '../../header/TitleComponent'
import FooterComponent from '../../footer/FooterComponent'

export default class MainComponent extends Component {
    render() {
        return (
            <div>
                <TitleComponent />
                <HeaderComponent />
                <AsideComponent />
                <NewMangaComponent />
                <ListMangaComponent title="Romance" type="romance" />
                <ListMangaComponent title="Fantasy" type="fantasy" />
                <ListMangaComponent title="Action" type="action" />
                <AppComponent />
                <FooterComponent />
            </div>
        )
    }
}