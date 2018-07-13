export function shapeFour() {
  var num = Math.floor(Math.random() * (3) ) + 1;
  if (num===1) {
    return 'Line';
  }
  else if (num===2) {
    return 'Square';
  }
  else if (num===3) {
    return "Tee";
  }
}

export function dropPiece(squares, x) {
  for (var i = 0; i < squares[x].length; i++) {
    if (i===8&&squares[x][8].color==='gray'){
      return 8;
    }
    else if (squares[x][i].color!=='gray') {
      return i-1;
    }
    else {
      continue
    }
  }
}

export function checkForScore(state,x,y) {
  if (state.currentPlayer==='Red') {
    if (state.redShape==='Square') {
      state = checkForSquare(state,x,y,state.currentPlayer);
    }
    else if (state.redShape==='Line') {
      state = checkForLine(state,x,y,state.currentPlayer);
    }
    else if (state.redShape==='Tee') {
      state = checkForTee(state,x,y,state.currentPlayer);
    }
  }
  else if (state.currentPlayer==='Blue'){
    if (state.blueShape==='Square') {
      state = checkForSquare(state,x,y,state.currentPlayer);
    }
    else if (state.blueShape==='Line') {
      state = checkForLine(state,x,y,state.currentPlayer);
    }
    else if (state.blueShape==='Tee') {
      state = checkForTee(state,x,y,state.currentPlayer);
    }
  }
  return state;
}

export function checkForSquare(state,x,y,playerColor) {
  if (x+1<=8&&y+1<=8&&state.squares[x+1][y].color===playerColor&&state.squares[x][y+1].color===playerColor&&state.squares[x+1][y+1].color===playerColor) {
    state = addPoint(state);
  }
  else if (x-1>=0&&y+1<=8&&state.squares[x-1][y].color===playerColor&&state.squares[x][y+1].color===playerColor&&state.squares[x-1][y+1].color===playerColor){
    state = addPoint(state);
  }
  return state;
}

export function checkForLine(state,x,y,playerColor) {
  if (x+1<=8&&x+2<=8&&x+3<=8&&state.squares[x+1][y].color===playerColor&&state.squares[x+2][y].color===playerColor&&state.squares[x+3][y].color===playerColor) {
    state = addPoint(state);
  }
  else if (x+1<=8&&x-1>=0&&x+2<=8&&state.squares[x-1][y].color===playerColor&&state.squares[x+1][y].color===playerColor&&state.squares[x+2][y].color===playerColor) {
    state = addPoint(state);
  }
  else if (x+1<=8&&x-1>=0&&x-2>=0&&state.squares[x-2][y].color===playerColor&&state.squares[x-1][y].color===playerColor&&state.squares[x+1][y].color===playerColor) {
    state = addPoint(state);
  }
  else if (x-2>=0&&x-1>=0&&x-3>=0&&state.squares[x-3][y].color===playerColor&&state.squares[x-2][y].color===playerColor&&state.squares[x-1][y].color===playerColor) {
    state = addPoint(state);
  }

  else if (y+1<=8&&y+2<=8&&y+3<=8&&state.squares[x][y+1].color===playerColor&&state.squares[x][y+2].color===playerColor&&state.squares[x][y+3].color===playerColor) {
    state = addPoint(state);
  }
  else if (y+1<=8&&y-1>=0&&y+2<=8&&state.squares[x][y-1].color===playerColor&&state.squares[x][y+1].color===playerColor&&state.squares[x][y+2].color===playerColor) {
    state = addPoint(state);
  }
  else if (y+1<=8&&y-1>=0&&y-2>=0&&state.squares[x][y-2].color===playerColor&&state.squares[x][y-1].color===playerColor&&state.squares[x][y+1].color===playerColor) {
    state = addPoint(state);
  }
  else if (y-1>=0&&y-2>=0&&y-3>=0&&state.squares[x][y-3].color===playerColor&&state.squares[x][y-2].color===playerColor&&state.squares[x][y-1].color===playerColor) {
    state = addPoint(state);
  }
  return state;
}

export function checkForTee(state,x,y,playerColor) {
  if (x-1>=0&&y+1<=8&&x+1<=8&&state.squares[x-1][y+1].color===playerColor&&state.squares[x][y+1].color===playerColor&&state.squares[x+1][y+1].color===playerColor) {
    state = addPoint(state);
  }
  else if (x+1<=8&&y-1>=0&&x+2<=8&&state.squares[x+1][y].color===playerColor&&state.squares[x+1][y-1].color===playerColor&&state.squares[x+2][y].color===playerColor) {
    state = addPoint(state);
  }
  else if (x-1>=0&&y-1>=0&&x-2>=0&&state.squares[x-1][y].color===playerColor&&state.squares[x-1][y-1].color===playerColor&&state.squares[x-2][y].color===playerColor) {
    state = addPoint(state);
  }

  else if (y+1<=8&&y+2<=8&&x+1<=8&&state.squares[x][y+1].color===playerColor&&state.squares[x][y+2].color===playerColor&&state.squares[x+1][y+1].color===playerColor) {
    state = addPoint(state);
  }
  else if (x-1>=0&&y-1>=0&&y+1<=8&&state.squares[x-1][y-1].color===playerColor&&state.squares[x-1][y].color===playerColor&&state.squares[x-1][y+1].color===playerColor) {
    state = addPoint(state);
  }

  else if (x+1<=8&&y-1>=0&&y+1<=8&&state.squares[x+1][y-1].color===playerColor&&state.squares[x+1][y].color===playerColor&&state.squares[x+1][y+1].color===playerColor) {
    state = addPoint(state);
  }
  else if (x-1>=0&&y+1<=8&&y+2<=8&&state.squares[x-1][y+1].color===playerColor&&state.squares[x][y+1].color===playerColor&&state.squares[x][y+2].color===playerColor) {
    state = addPoint(state);
  }

  else if (x+1<=8&&y+1<=8&&x+2<=8&&state.squares[x+1][y].color===playerColor&&state.squares[x+1][y+1].color===playerColor&&state.squares[x+2][y].color===playerColor) {
    state = addPoint(state);
  }
  else if (x-1>=0&&y+1<=8&&x+1<=8&&state.squares[x-1][y].color===playerColor&&state.squares[x][y+1].color===playerColor&&state.squares[x+1][y].color===playerColor) {
    state = addPoint(state);
  }
  else if (x-2>=0&&x-1>=0&&y+1<=8&&state.squares[x-2][y].color===playerColor&&state.squares[x-1][y].color===playerColor&&state.squares[x-1][y+1].color===playerColor) {
    state = addPoint(state);
  }
  return state;
}

export function addPoint(state) {
  if (state.currentPlayer==='Red') {
    state.redShape = shapeFour();
    state.redPoints += 1;
  }
  else if (state.currentPlayer==='Blue') {
    state.blueShape = shapeFour();
    state.bluePoints += 1;
  }
  return state;
}
