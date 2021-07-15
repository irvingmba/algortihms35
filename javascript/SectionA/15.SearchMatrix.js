const isMatrix = require("../utils/isMatrix");

function searchMatrix(matrix, elem) {
  if (!isMatrix(matrix)) throw new TypeError("You must input a matrix");
  return matrixBynarySearch(matrix, elem);
}

function matrixBynarySearch(matrix, value, lower, upper) {
  if (!lower && !upper) {
    lower = [0, 0];
    upper = [matrix.length - 1, matrix[0].length - 1];
    const lowerValue = matrix[lower[0]][lower[1]],
      upperValue = matrix[upper[0]][upper[1]];
    if (value === lowerValue) return lower;
    if (value === upperValue) return upper;
  }
  const lowerCount = lower[0] * matrix[0].length + lower[1] + 1,
    upperCount = upper[0] * matrix[0].length + upper[1] + 1,
    total = upperCount - lowerCount + 1,
    middleCount = lowerCount + Math.ceil(total / 2) - 1,
    middleY =
      middleCount % matrix[0].length
        ? Math.floor(middleCount / matrix[0].length)
        : Math.floor(middleCount / matrix[0].length) - 1,
    middleX =
      middleCount % matrix[0].length
        ? (middleCount % matrix[0].length) - 1
        : matrix[0].length - 1,
    middleValue = matrix[middleY][middleX],
    middle = [middleY, middleX];
  if (value === middleValue) return middle;
  if (
    (lower[0] === middleY && lower[1] === middleX) ||
    (upper[0] === middleY && upper[1] === middleX)
  )
    return [];
  if (value > middleValue)
    return matrixBynarySearch(matrix, value, middle, upper);
  if (value < middleValue)
    return matrixBynarySearch(matrix, value, lower, middle);
}

module.exports = searchMatrix;
