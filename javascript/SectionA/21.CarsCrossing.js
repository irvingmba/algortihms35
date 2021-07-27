const isMatrix = require("../utils/isMatrix");

function carsCrossing(matrix) {
  if (!isMatrix(matrix)) throw new TypeError("You must input a 2D matrix");
  let toRight = 0, toLeft = 0, crossed = 0;
  for (let i = 0; i < matrix[0].length; ++i) {
    for (let j = 0; j < matrix.length; ++j) {
        const car = matrix[j][i];
        switch(car){
            case "L":{
                ++toLeft;
                break;
            }
            case "R": {
                ++toRight;
                break;
            }
        }
    }
    crossed += toLeft*toRight;
    toLeft = 0;
  }
  return crossed;
}

module.exports = carsCrossing;
