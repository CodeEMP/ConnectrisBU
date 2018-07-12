import React, { Component } from 'react';
import './App.css';
import Board from './Components/board.js';
import PlayerStatus from './Components/playerstatus.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      rowHover: 0,
      currentPlayer : 'Red',
      bluePoints: 0,
      redPoints: 0,
      blueShape: undefined,
      redShape: undefined,
      squares : [[{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
                [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
                [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
                [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
                [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
                [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
                [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
                [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
                [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}]],
    }
  }

  hoverHandler(x) {
    var new_state = this.state;
    for (var i = 0; i < new_state.squares[new_state.rowHover].length; i++){
      if (new_state.squares[new_state.rowHover][i].color==='gray') {
        new_state.squares[new_state.rowHover][i].color='lightgray';
      }
    }
    new_state.rowHover = x;
    for (var j = 0; j < new_state.squares[new_state.rowHover].length; j++) {
      if (new_state.squares[new_state.rowHover][j].color==='lightgray') {
        new_state.squares[new_state.rowHover][j].color='gray';
      }
    }
    this.setState(new_state);
  }

  clickHandler(x,y) {
    console.log(x,y);
    var new_state = this.state;
    new_state.squares[x][y].color = this.state.currentPlayer;
    if (this.state.currentPlayer==='Red') {
      new_state.currentPlayer='Blue';
    }
    else {
      new_state.currentPlayer='Red';
    }
    this.setState(new_state);
  }

  render() {
    return (
        <div>
          <header className="header">
            <h1>Connectris beta</h1>
          </header>
          <div className="content">
            <div>
              <PlayerStatus player='Red' currentPlayer={this.state.currentPlayer} points={this.state.redPoints} />
            </div>
            <div className="board">
              <Board currentPlayer={this.state.currentPlayer}
                squares={this.state.squares}
                hoverHandler={(x) => this.hoverHandler(x)}
                clickHandler={(x,y) => this.clickHandler(x,y)} />
            </div>
            <div>
              <PlayerStatus player='Blue' currentPlayer={this.state.currentPlayer} points={this.state.bluePoints} />
            </div>
          </div>
        </div>
    );
  }
}


export default App;
