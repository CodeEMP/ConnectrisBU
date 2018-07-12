import deepcopy from 'deepcopy';

var initialstate = {
  squares : [[{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
            [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
            [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
            [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
            [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
            [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
            [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
            [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}],
            [{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',},{color: 'lightgray',}]],
  currentPlayer : 'Red',
  bluePoints: 0,
  redPoints: 0,
  blueShape: undefined,
  redShape: undefined,
  rowHover: 0,
}

function Connectris (state, action) {
  if (state === undefined) {
    return initialstate;
  }

  var new_state;

  switch(action.type) {
    case 'NEXT_PLAYER':

      new_state = {...state};
      if (new_state.currentPlayer === 'Red') {
        new_state.currentPlayer = 'Blue';
      }
      else {
        new_state.currentPlayer = 'Red';
      }
      return new_state;

    case 'HOVER_CHANGE':

      new_state = deepcopy({...state});
      for (var i = 0; i < new_state.squares[new_state.rowHover].length; i++){
        if (new_state.squares[new_state.rowHover][i].color==='gray') {
          new_state.squares[new_state.rowHover][i].color='lightgray';
        }
      }
      new_state.rowHover = action.x;
      for (var j = 0; j < new_state.squares[new_state.rowHover].length; j++) {
        if (new_state.squares[new_state.rowHover][j].color==='lightgray') {
          new_state.squares[new_state.rowHover][j].color='gray';
        }
      }
      return new_state;

    case 'COLOR_CHANGE':

      new_state = deepcopy({...state});
      var x = action.x;
      var y = action.y;
      new_state.squares[x][y].color = action.color;
      return new_state;

    default:
      return state;

  }
};

export default Connectris;
