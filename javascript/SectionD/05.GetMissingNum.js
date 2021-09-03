function getMissingNum(numbers) {
  if (!Array.isArray(numbers))
    throw new TypeError("Input a proper array number");
  const n = numbers.length + 1,
    sum = (n * (n + 1)) / 2;
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return sum - total;
}

module.exports = getMissingNum;
