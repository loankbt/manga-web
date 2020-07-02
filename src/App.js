import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BannerComponent from './components/banner/BannerComponent'
import HeaderComponent from './components/header/HeaderComponent';
import MainComponent from './components/main/homepage/MainComponent';

function App() {
  return (
    <div>
      <BannerComponent />
      <HeaderComponent />
      <MainComponent />
    </div>
  )
}

export default App;
