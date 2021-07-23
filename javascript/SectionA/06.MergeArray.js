function mergeArray(firstArray, secondArray) {
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray))
    throw new TypeError("You must input arrays");
  let index = firstArray.length - secondArray.length - 1,
    pointer = firstArray.length - 1,
    pointerSec = secondArray.length - 1;
  while (pointerSec != -1) {
    const fLast = firstArray[index],
      sLast = secondArray[pointerSec];
    if (fLast > sLast) {
      firstArray[pointer] = fLast;
      --index;
    } else {
      firstArray[pointer] = sLast;
      --pointerSec;
    }
    --pointer;
  }
  return firstArray;
}

module.exports = mergeArray;
