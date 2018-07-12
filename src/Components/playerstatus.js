import React, { Component } from 'react';

class PlayerStatus extends Component {

  renderPointsAndShape() {
    if (this.props.player === 'Red') {
      return (
        <p>
          {this.props.redPoints}
        </p>
      )
    }
    else {
      return (
        <p>
          {this.props.bluePoints}
        </p>
      )
    }
  }

  render() {
    return(
      <div>
        <h2>
          {this.props.currentPlayer === this.props.player ? (<p>:NEXT:</p>) : <p>::</p>}
          {this.props.player}
          {this.renderPointsAndShape()}
        </h2>
      </div>
    )
  }
}

export default PlayerStatus;
