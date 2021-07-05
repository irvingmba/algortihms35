function maxArrayValue(arr, index = 0) {
  if (!Array.isArray(arr)) throw new TypeError("Must provide an array");
  if (index < arr.length - 1) {
    const current = arr[index],
      rest = maxArrayValue(arr, index + 1);
    return current > rest ? current : rest;
  }
  return arr[index];
}

module.exports = maxArrayValue;
