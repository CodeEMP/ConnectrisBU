import React, { Component } from 'react';

class PlayerStatus extends Component {

  renderPointsAndShape() {
      return (
        <p>
          {this.props.points}
        </p>
      )
  }

  render() {
    return(
      <div>
        <h2>
          {this.props.currentPlayer === this.props.player ? (<p>:NEXT:</p>) : <p>:______:</p>}
          {this.props.player}
          {this.renderPointsAndShape()}
        </h2>
      </div>
    )
  }
}

export default PlayerStatus;
