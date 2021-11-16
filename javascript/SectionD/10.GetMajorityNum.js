function getMajorityNum(numbers) {
  if (!Array.isArray(numbers))
    throw new TypeError("Input a proper number array");
  if(numbers.length <2) return numbers.length ? numbers[0] : null;
  const majority = Math.floor(numbers.length / 2),
    freqs = new Map();
  for (let i = 0; i < numbers.length; ++i) {
    const num = numbers[i];
    if (typeof num !== "number")
      throw new TypeError("Array elements must be numbers");
    if (freqs.has(num)) {
      const previous = freqs.get(num);
      if (previous + 1 > majority) return num;
      freqs.set(num, previous + 1);
    } else {
      freqs.set(num, 1);
    }
  }
  return null;
}

module.exports = getMajorityNum;
