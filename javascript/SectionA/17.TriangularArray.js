const isMatrix = require("../utils/isMatrix");

class TriangularArray {
  constructor(matrix) {
    if (!isMatrix(matrix))
      throw new TypeError("You must input a proper matrix");
    if (matrix.length != matrix[0].length)
      throw new TypeError("You must input a squared matrix");
    this.triangArray = [];
    for (let i = 0; i < matrix.length; ++i) {
      const quantity = i + 1;
      this.triangArray = this.triangArray.concat(matrix[i].slice(0, quantity));
    }
  }

  getElem(row, col) {
    const plainRow = row ? (row * (row + 1)) / 2 : 0,
      index = plainRow + col;
    return this.triangArray[index];
  }

  setElem(row, col, value) {
    const plainRow = row ? (row * (row + 1)) / 2 : 0,
      index = plainRow + col;
      this.triangArray[plainRow] = value;
  }
}

module.exports = TriangularArray;
