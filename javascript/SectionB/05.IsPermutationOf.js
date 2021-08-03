function isPermutationOf(word, permutated) {
  if (typeof word != "string" || typeof permutated != "string")
    throw new TypeError("Input 2 proper strings");
  if (word === permutated) return false;
  if (word.length != permutated.length) return false;
  const abc = "abcdefghijklmnopqrstuvwxyz";
  for (const letter of abc) {
    const inWord = word.includes(letter),
      inPermutated = permutated.includes(letter);
    if (inWord ? !inPermutated : inPermutated) return false;
    if (!inWord) continue;
    const regex = new RegExp(letter, "gi"),
      wordMatch = word.match(regex),
      permutatedMatch = permutated.match(regex);
    if (wordMatch.length != permutatedMatch.length) return false;
  }
  return true;
}

module.exports = isPermutationOf;
