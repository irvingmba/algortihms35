const isMatrix = require("../utils/isMatrix");

function rotateMatrix(matrix) {
  if (!isMatrix(matrix)) throw new TypeError("You must input a 2D matrix");
  // return matrix.reduce(rotateRow, []);
  for (let i = 0; i < matrix.length - 1; ++i) {
    const row = matrix[i],
      start = i,
      end = row.length - i - 1;
    if (start === end) break;
    for (let j = 0; j < end - start; ++j) {
      [
        matrix[start][start + j],
        matrix[start + j][end],
        matrix[end][end - j],
        matrix[end - j][start],
      ] = [
        matrix[start + j][end],
        matrix[end][end - j],
        matrix[end - j][start],
        matrix[start][start + j],
      ];
    }
  }
  return matrix;
}

function rotateRow(acc, row, rowIndex) {
  const rotIndexJ = rowIndex;
  for (let j = 0; j < row.length; ++j) {
    const col = row[j],
      rotIndexI = row.length - 1 - j;
    if (!Array.isArray(acc[rotIndexI])) acc[rotIndexI] = [];
    acc[rotIndexI][rotIndexJ] = col;
  }
  return acc;
}

module.exports = rotateMatrix;
