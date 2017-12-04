import React, { Component } from 'react';
import './App.css';
import NextStep from './components/NextStep'
import VisualProgress from './components/VisualProgress'

class App extends Component {
  render() {
    return (
      <div className="App" >

      <div>
        <h1>Tic Tac Too</h1>
      </div>

      <NextStep />

      <VisualProgress />

      </div>
    );
  }
}

export default App;
