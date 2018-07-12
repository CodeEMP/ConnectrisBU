export function shapeFour() {
  var num = Math.floor(Math.random() * (2) ) + 1;
  if (num===1) {
    return 'Line';
  }
  else if (num===2) {
    return 'Square';
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
