import React, { Component } from 'react';
import './App.css';
import Winner from './components/Winner'
import VisualProgress from './components/VisualProgress'

class App extends Component {
  render() {
    return (
      <div className="App" >

      <div>
        <h1>Tic Tac Toe</h1>
      </div>

      <Winner />

      <VisualProgress />

      </div>
    );
  }
}

export default App;
