function mergeArray(firstArray, secondArray) {
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray))
    throw new TypeError("You must input arrays");
  let index = firstArray.length - secondArray.length - 1;
  let pointer = firstArray.length - 1;
  while (secondArray.length) {
    const fLast = firstArray[index],
      sLast = secondArray[secondArray.length - 1];
    if (fLast > sLast) {
      firstArray[pointer] = fLast;
      --index;
    } else {
      firstArray[pointer] = sLast;
      secondArray.pop();
    }
    --pointer;
  }
  return firstArray;
}

module.exports = mergeArray;
