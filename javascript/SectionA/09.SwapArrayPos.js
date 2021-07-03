function swapArrayPos(arr) {
  if (
    !Array.isArray(arr) ||
    arr.some((value) => value < 0 || value > arr.length - 1)
  )
    throw new TypeError(
      "You must input an array with values from 0 to " + arr.length - 1
    );
  return arr.map((value, index, self) => {
    return self[value];
  });
}

module.exports = swapArrayPos;