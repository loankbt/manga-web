import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BannerComponent from './components/banner/BannerComponent'
import HeaderComponent from './components/header/HeaderComponent';
import MainComponent from './components/main/homepage/MainComponent'
import OnGoingMangaComponent from './components/main/manga-list/OnGoingMangaComponent'
import CompletedMangaComponent from './components/main/manga-list/CompletedMangaComponent'
import { BrowserRouter as Router, Route } from "react-router-dom"
import DetailMangaComponent from './components/main/single-manga/DetailMangaComponent'

function App() {
  return (
    <div>
      <Router>
        <BannerComponent />
        <HeaderComponent />
        <Route exact path="/" component={MainComponent} />
        <Route path="/on-going" component={OnGoingMangaComponent} />
        <Route path="/completed" component={CompletedMangaComponent} />
        <Route path="/manga/detail/:mangaCode" component={DetailMangaComponent} />
      </Router>
    </div>
  )
}

export default App;
