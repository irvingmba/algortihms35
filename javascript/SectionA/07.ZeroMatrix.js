const isMatrix = require("../utils/isMatrix");

function zeroMatrix(matrix) {
  if (!isMatrix(matrix)) throw new TypeError("Input a 2D matrix");
  const zeroColumn = new Set();
  const zeroMatrix = [];
  for (let i = 0; i < matrix.length; ++i) {
    const row = matrix[i];
    let zeroRow = false;
    for (let j = 0; j < row.length; ++j) {
      const col = row[j];
      if (!col) {
        zeroRow = true;
        zeroColumn.add(j);
      }
    }
    if (zeroRow) {
      zeroMatrix.push(new Array(row.length).fill(0));
    } else {
      zeroMatrix.push(row);
    }
  }
  const zeroColValues = Array.from(zeroColumn);
  if (zeroColumn.size) {
    for (let i = 0; i < matrix.length; ++i) {
      if (!zeroColumn.has(i)) {
        const row = matrix[i];
        for (let j = 0; j < zeroColValues.length; ++j) {
          const zeroCol = zeroColValues[j];
          row[zeroCol] = 0;
        }
      }
    }
  }
  return zeroMatrix;    
}

module.exports = zeroMatrix;