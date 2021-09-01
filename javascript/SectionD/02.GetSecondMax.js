function getSecondMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length < 2)
    throw new TypeError("Input a proper array");
  let max = numbers.slice(0, 2);
  if (max[0] < max[1]) {
    const [max1, max2] = max;
    max = [max2, max1];
  }
  for (let i = 1; i < numbers.length; ++i) {
    const num = numbers[i],
      [max1, max2] = max;
    if (typeof num != "number") throw new TypeError("Input proper numbers");
    if (num > max2) {
      if (num > max1) {
        max[1] = max1;
        max[0] = num;
        continue;
      }
      if (num < max1) max[1] = num;
    }
  }
  return max[1];
}

module.exports = getSecondMax;
