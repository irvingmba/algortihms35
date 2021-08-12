function isRotationOf(word, rotated) {
  if (typeof word != "string" || typeof rotated != "string")
    throw new TypeError("Input two strings");
  if (word.length != rotated.length) return false;
  const mixed = rotated + rotated;
  return mixed.includes(word);
}

module.exports = isRotationOf;
