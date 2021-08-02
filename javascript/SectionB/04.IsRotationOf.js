function isRotationOf(word, rotated) {
  if (typeof word != "string" || typeof rotated != "string")
    throw new TypeError("Input two strings");
  if (word.length != rotated.length) return false;
  for (let i = 0; i < word.length; ++i) {
    if (word[i] != rotated[rotated.length - 1 - i]) return false;
  }
  return true;
}

module.exports = isRotationOf;
