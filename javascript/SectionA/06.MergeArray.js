function mergeArray(firstArray, secondArray) {
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray))
    throw new TypeError("You must input arrays");
  let pointer = 0;
  let merged = 0;
  while (merged < secondArray.length) {
    const fLast = firstArray.length - secondArray.length - 1 - pointer + merged > -1 ?
        firstArray[
          firstArray.length - secondArray.length - 1 - pointer + merged
        ] : Number.MIN_VALUE,
      sLast = secondArray[secondArray.length - 1 - merged],
      lastPosition = firstArray.length - 1 - pointer;
    if (fLast > sLast) {
      firstArray[lastPosition] = fLast;
    } else {
      firstArray[lastPosition] = sLast;
      ++merged;
    }
    ++pointer;
  }
  return firstArray;
}

module.exports = mergeArray;
