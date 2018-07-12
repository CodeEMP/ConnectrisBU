export function nextPlayer () {
  return {
    type: 'NEXT_PLAYER',
  };
}

export function hoverChange(x) {
  return {
    type: 'HOVER_CHANGE',
    x:x
  };
}

export function colorChange(x,y,color) {
  return {
    type: 'COLOR_CHANGE',
    x:x,
    y:y,
    color: color
  }
}
