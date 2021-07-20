const isMatrix = require("../utils/isMatrix");

function zeroMatrix(matrix) {
  if (!isMatrix(matrix)) throw new TypeError("Input a 2D matrix");
  const zeroColumn = new Set();
  for (let i = 0; i < matrix.length; ++i) {
    const row = matrix[i];
    let zeroFlag = false;
    for (let j = 0; j < row.length; ++j) {
      const col = row[j];
      if (!col) {
        zeroColumn.add(j);
        zeroFlag = true;
      }
    }
    if(zeroFlag) row.fill(0);
  }
  for(let zeroIndex of zeroColumn.values()){
    for(let i=0;i < matrix.length; ++i){
      const row = matrix[i];
      row[zeroIndex] = 0;
    }
  }
  return matrix;
}

module.exports = zeroMatrix;
