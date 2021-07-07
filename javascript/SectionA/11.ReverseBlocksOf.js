function reverseBlocksOf(arr, size) {
  if (!Array.isArray(arr) || typeof size !== "number")
    throw new TypeError("Input an array and a number size block");
  let blocks = Math.floor(arr.length / size),
    lastChunk = arr.length - blocks * size;
  const reversed = [];
  for (let block = 0; block < blocks; ++block) {
    for (let j = 0; j < Math.ceil(size / 2); ++j) {
      const first = j + size * block,
        last = size * (block + 1) - 1 - j;
      reversed[first] = arr[last];
      reversed[last] = arr[first];
    }
  }
  if (lastChunk) {
    const halfChunk = Math.ceil(lastChunk / 2);
    for (let i = 0; i < halfChunk; ++i) {
      const first = i + size * blocks,
        last = size * blocks + lastChunk - 1 - i;
      reversed[first] = arr[last];
      reversed[last] = arr[first];
    }
  }
  return reversed;
}

module.exports = reverseBlocksOf;
