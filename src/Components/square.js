import React from 'react';

function Square (props) {

    return (
      <button className="square" style={{background:props.value.color}}
        onMouseEnter={props.onMouseEnter}
        onClick={props.onClick}>

      </button>
    );
}



export default Square;
