const isMatrix = require("../utils/isMatrix");

class TriangularArray {
  constructor(matrix) {
    if (!isMatrix(matrix))
      throw new TypeError("You must input a proper matrix");
    if (matrix.length != matrix[0].length)
      throw new TypeError("You must input a squared matrix");
    if (!this.isMirror(matrix)) throw new TypeError("Matrix is not a mirror");
    this.triangArray = [];
    for (let i = 0; i < matrix.length; ++i) {
      const quantity = i + 1;
      this.triangArray = this.triangArray.concat(matrix[i].slice(0, quantity));
    }
  }

  getElem(row, col) {
    const index = this.getPlainIndex(row, col);
    return this.triangArray[index];
  }

  setElem(row, col, value) {
    const index = this.getPlainIndex(row, col);
    this.triangArray[index] = value;
  }

  getPlainIndex(row, col) {
    let index;
    if (col > row) {
      const plainRow = col ? (col * (col + 1)) / 2 : 0;
      index = plainRow + row;
    } else {
      const plainRow = row ? (row * (row + 1)) / 2 : 0;
      index = plainRow + col;
    }
    return index;
  }

  isMirror(matrix) {
    for (let i = 0; i < matrix.length; ++i) {
      const row = matrix[i];
      for (let j = 0; j < i; ++j) {
        if (matrix[i][j] !== matrix[j][i]) return false;
      }
    }
    return true;
  }
}

module.exports = TriangularArray;
