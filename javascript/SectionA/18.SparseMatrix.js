const isMatrix = require("../utils/isMatrix");

class SparseMatrix {
  constructor(matrix) {
    if (!isMatrix(matrix))
      throw new TypeError("You must input a proper matrix");
    this.compactMatrix = new Map();
    for (let i = 0; i < matrix.length; ++i) {
      const row = matrix[i];
      for (let j = 0; j < row.length; ++j) {
        const col = row[j];
        if (col) {
          if (this.compactMatrix.has(i)) {
            const compRow = this.compactMatrix.get(i);
            compRow.set(j, col);
          } else {
            const compCol = new Map();
            compCol.set(j, col);
            this.compactMatrix.set(i, compCol);
          }
        }
      }
    }
  }

  getElem(row, col) {
      if(!this.compactMatrix.has(row)) return 0;
      const compRow = this.compactMatrix.get(row);
      if(!compRow.has(col)) return 0;
      return compRow.get(col);
  }

  setElem(row, col, value) {
      if(this.compactMatrix.has(row)){
          const compRow = this.compactMatrix.get(row);
          compRow.set(col, value);
      } else {
          const compCol = new Map();
          compCol.set(col, value);
          this.compactMatrix.set(row, compCol);
      }
  }
}

module.exports = SparseMatrix;
