import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import Services from './Services';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation LogoTitle="Chantity Buraimoh" />
        <Header title="Stylish Portfolio" button="Find Out More"/>
        <About />
        <Services />

      </div>
    );
  }
}

export default App;
