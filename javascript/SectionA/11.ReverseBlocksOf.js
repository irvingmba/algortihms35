function reverseBlocksOf(arr, size) {
  if (!Array.isArray(arr) || typeof size !== "number")
    throw new TypeError("Input an array and a number size block");
  let blocks = Math.floor(arr.length / size),
    lastChunk = arr.length - blocks * size;
  for (let block = 0; block < blocks; ++block) {
    for (let j = 0; j < Math.ceil(size / 2); ++j) {
      const first = j + size * block,
        last = size * (block + 1) - 1 - j;
        [arr[first], arr[last]] = [arr[last], arr[first]];
    }
  }
  if (lastChunk) {
    const halfChunk = Math.ceil(lastChunk / 2);
    for (let i = 0; i < halfChunk; ++i) {
      const first = i + size * blocks,
        last = size * blocks + lastChunk - 1 - i;
        [arr[first], arr[last]] = [arr[last], arr[first]];
    }
  }
  return arr;
}

module.exports = reverseBlocksOf;
