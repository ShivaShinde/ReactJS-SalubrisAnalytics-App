import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>Welcome to Salubris Analytics</h1>
        <p className="App-intro">
          Click the below image to visit our website
        </p>
        <a href="http://www.salubrisanalytics.com/"><img src="http://i.imgur.com/lX6uizG.png" title="source: imgur.com" /></a>
        <p>This is my first ReactJS App</p>
      </div>
    );
  }
}

export default App;
