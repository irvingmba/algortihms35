function getSeqSum(total) {
  if (typeof total !== "number" || total < 1)
    throw new TypeError("Input a proper number greater than zero");
  let start = 1,
    end = 1,
    sum = 1;
  while (sum !== total) {
    if (total > sum) {
      ++end;
      sum += end;
    } else {
      sum -= start;
      ++start;
    }
  }
  return new Array(end - start + 1).fill(start).map((v, i) => v + i);
}

module.exports = getSeqSum;
