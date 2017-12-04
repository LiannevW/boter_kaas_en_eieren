import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App" >

      <div>
        <h1>Tic Tac Too</h1>
      </div>

      <div>
        <p>X It is your turn!</p>
      </div>


      <div id="board">
          <table>
            <tr id="row1">
              <td class="square">X</td>
              <td class="square">O</td>
              <td class="square"></td>
            </tr>
            <tr id="row2">
              <td class="square"></td>
              <td class="square">X</td>
              <td class="square"></td>
            </tr>
            <tr id="row3">
              <td class="square"></td>
              <td class="square">O</td>
              <td class="square">X</td>
            </tr>
          </table>
          </div>

      </div>
    );
  }
}

export default App;
