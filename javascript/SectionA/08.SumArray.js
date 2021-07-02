function sumArray(first, second) {
  if (
    !Array.isArray(first) ||
    !Array.isArray(second) ||
    first.some((value) => value > 9) ||
    second.some((value) => value > 9)
  )
    throw new TypeError("You must input two single-digit number arrays");
  let index = 0,
    add1 = 0,
    add2 = 0;
  while (first.length || second.length) {
    add1 += first.length ? first.pop() * Math.pow(10, index) : 0;
    add2 += second.length ? second.pop() * Math.pow(10, index) : 0;
    ++index;
  }
  total = add1 + add2;
  const totalArray = [];
  while(total){
      totalArray.unshift(total%10);
      total = Math.floor(total/10);
  }
  return totalArray
}

module.exports = sumArray;
