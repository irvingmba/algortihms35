const isMatrix = require("../utils/isMatrix");

function carsCrossing(cars) {
  const checkedCars = isMatrix(cars) ? cars : [cars];
  let toRight = 0,
    toLeft = 0,
    crossed = 0;
  for (let i = 0; i < checkedCars[0].length; ++i) {
    for (let j = 0; j < checkedCars.length; ++j) {
      const car = checkedCars[j][i];
      switch (car) {
        case "L": {
          ++toLeft;
          break;
        }
        case "R": {
          ++toRight;
          break;
        }
      }
    }
    crossed += toLeft * toRight;
    toLeft = 0;
  }
  return crossed;
}

module.exports = carsCrossing;
