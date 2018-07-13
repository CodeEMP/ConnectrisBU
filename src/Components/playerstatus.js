import React, { Component } from 'react';

class PlayerStatus extends Component {

  renderPoints() {
      return (
        <p>
          {this.props.points}
        </p>
      )
  }

  renderColorShape() {
    if (this.props.shape==='Line') {
      return (
        <div>
          <p className='shapecontainer'>
            [][][][]
          </p>
        </div>
      )
    }
    else if (this.props.shape==='Square') {
      return (
        <div>
          <p className='shapecontainer'>
            [][]
          </p>
          <p className='shapecontainer'>
            [][]
          </p>
        </div>
      )
    }
    else if (this.props.shape==='Tee') {
      return (
        <div>
          <p className='shapecontainer'>
            []
          </p>
          <p className='shapecontainer'>
            [][]
          </p>
          <p className='shapecontainer'>
            []
          </p>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <h2>
          {this.props.currentPlayer === this.props.player ? (<p className='turnmarker'>:NEXT:</p>) : <p className='turnmarker'>:_____:</p>}
          {this.props.player}
          {this.renderPoints()}
          {this.renderColorShape()}
        </h2>
      </div>
    )
  }
}

export default PlayerStatus;
