import React, { Component } from 'react';
import './App.css';
import NextStep from './components/NextStep'

class App extends Component {
  render() {
    return (
      <div className="App" >

      <div>
        <h1>Tic Tac Too</h1>
      </div>

      <NextStep />

      <div>
          <table>
            <tr id="row1">
              <td className="square">X</td>
              <td className="square">O</td>
              <td className="square"></td>
            </tr>
            <tr id="row2">
              <td className="square"></td>
              <td className="square">X</td>
              <td className="square"></td>
            </tr>
            <tr id="row3">
              <td className="square"></td>
              <td className="square">O</td>
              <td className="square">X</td>
            </tr>
          </table>
        </div>

      </div>
    );
  }
}

export default App;
