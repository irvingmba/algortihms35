function isBalanced(expression) {
  if (typeof expression != "string")
    throw new TypeError("You must input a string");
  let p1 = 0,
    p2 = expression.length - 1,
    captured = "";
  const rxStart = /[\(\[\{]/, rxFinal = /[\)\]\}]/;
  while (p1 != p2) {
    const finalLetter = expression[p2];
    switch (captured) {
      case "(": {
        if (finalLetter === ")") captured = "";
        --p2;
        break;
      }
      case "[": {
        if (finalLetter === "]") captured = "";
        --p2;
        break;
      }
      case "{": {
        if (finalLetter === "}") captured = "";
        --p2;
        break;
      }
      default: {
        const letter = expression[p1];
        if (rxStart.test(letter)) {
          captured = letter;
        } else if(rxFinal.test(letter)) return false;
        ++p1;
      }
    }
  }
  return !captured;
}

module.exports = isBalanced;
