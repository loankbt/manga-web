import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import MainComponent from './components/main/homepage/MainComponent'
import OnGoingMangaComponent from './components/main/manga-list/OnGoingMangaComponent'
import CompletedMangaComponent from './components/main/manga-list/CompletedMangaComponent'
import DetailMangaComponent from './components/main/single-manga/DetailMangaComponent'
import EpComponent from './components/main/single-manga/EpComponent';

export default class App extends Component {
  render() {
    return (
        <Router>
          <Route exact path="/" component={MainComponent} />
          <Route path="/on-going" component={OnGoingMangaComponent} />
          <Route path="/completed" component={CompletedMangaComponent} />
          <Route path="/manga/detail/:mangaCode" component={DetailMangaComponent} />
          <Route path="/episode/:mangaCode/:epId" component={EpComponent} />
        </Router>
    )
  }
}
