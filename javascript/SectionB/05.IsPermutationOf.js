function isPermutationOf(word, permutated) {
  if (typeof word != "string" || typeof permutated != "string")
    throw new TypeError("Input 2 proper strings");
  if (word === permutated) return false;
  if (word.length != permutated.length) return false;
  const hWord = word.split("").sort().join(),
    hPermutated = permutated.split("").sort().join();
  return hWord === hPermutated;
}

module.exports = isPermutationOf;
