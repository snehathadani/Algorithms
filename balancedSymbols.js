
function parenthesesChecker(symbols) {
  const stack = [];
  const opens = '([{';
  const closers = ')]}';
  let index = 0;
  let symbol;
  let top;

  while (index < symbols.length) {
    symbol = symbols[index];
    if (opens.indexOf(symbol) >= 0) {
      stack.push(symbol);
    } else if (stack.length===0) {
      
    } else {
      top = stack.pop();
      if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
 
      }
    }
    index++;
  }
  return stack.length===0;
}

console.log (parenthesesChecker('{[]}'));