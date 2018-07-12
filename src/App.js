import React, { Component } from 'react';
import './App.css';
import Board from './Components/board.js';
import PlayerStatus from './Components/playerstatus.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentPlayer : 'Red',
      bluePoints: 0,
      redPoints: 0,
      blueShape: undefined,
      redShape: undefined,
    }
  }

  render() {
    return (
        <div>
          <header className="header">
            <h1>Connectris beta</h1>
          </header>
          <div className="content">
            <div>
              <PlayerStatus player='Red' currentPlayer={this.state.currentPlayer} />
            </div>
            <div className="board">
              <Board />
            </div>
            <div>
              <PlayerStatus player='Blue' currentPlayer={this.state.currentPlayer} />
            </div>
          </div>
        </div>
    );
  }
}


export default App;
