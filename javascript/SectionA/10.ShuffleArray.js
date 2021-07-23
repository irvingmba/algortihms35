function shuffleArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("You must input an array");
  // const shuffled = new Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    const random = Math.ceil(Math.random() * (arr.length - 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
    // [shuffled[random], shuffled[i]] = [
    //   shuffled[i] ? shuffled[i] : arr[i],
    //   shuffled[random] ? shuffled[random] : arr[random],
    // ];
  }
  return arr;
}

module.exports = shuffleArray;
