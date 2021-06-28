function isMatrix(matrix) {
  if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) return false;
  return true;
}

module.exports = isMatrix;
