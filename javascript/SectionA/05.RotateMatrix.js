const isMatrix = require("../utils/isMatrix");

function rotateMatrix(matrix) {
  if (!isMatrix(matrix)) throw new TypeError("You must input a 2D matrix");
  return matrix.reduce(rotateRow, []);
}

function rotateRow(acc, row, rowIndex){
    const rotIndexJ = rowIndex;
    for(let j=0; j<row.length; ++j){
        const col = row[j], rotIndexI = row.length - 1 -j;
        if(!Array.isArray(acc[rotIndexI])) acc[rotIndexI] = [];
        acc[rotIndexI][rotIndexJ] = col;
    };
    return acc;
};

module.exports = rotateMatrix;