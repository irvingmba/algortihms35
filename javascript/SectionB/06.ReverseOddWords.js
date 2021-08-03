function reverseOddWords(sentence) {
  if (typeof sentence != "string")
    throw new TypeError("Input a proper sentence");
  const words = sentence.split(" ");
  let revSentence = "";
  for (let i = 0; i < words.length; ++i) {
    const word = words[i];
    if (word.length % 2) {
      words[i] = Array.prototype.reduce.call(
        word,
        (acc, letter) => letter + acc,
        ""
      );
    }
  }
  return words.join(" ");
}

module.exports = reverseOddWords;
