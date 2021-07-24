function shuffleArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("You must input an array");
  for (let i = 0; i < arr.length; ++i) {
    const random = Math.ceil(Math.random() * (arr.length - 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  return arr;
}

module.exports = shuffleArray;
