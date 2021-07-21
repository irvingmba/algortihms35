function swapArrayPos(arr) {
  if (
    !Array.isArray(arr) ||
    arr.some((value) => value < 0 || value > arr.length - 1)
  )
    throw new TypeError(
      "You must input an array with values from 0 to " + arr.length - 1
    );
  for(let i=0; i<arr.length; ++i){
    const value = arr[i];
    [arr[i], arr[value]] = [arr[value], arr[i]];
  }
  return arr;
}

module.exports = swapArrayPos;