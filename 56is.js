const is = (x, y) => {
  if (Number.isNaN(x) && Number.isNaN(y)) {
    return true;
  }
  
  if (x === 0 && y === 0) {
    return 1 / x === 1 / y;
  }
  
  return x === y;
}