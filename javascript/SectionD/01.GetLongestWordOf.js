const fs = require("fs");
const path = require("path");

function getWords() {
  let rawData;
  try {
    rawData = fs.readFileSync(
      path.resolve(__dirname, "../utils/english3.txt"),
      "utf8"
    );
  } catch (error) {
    console.error(error);
    return [];
  }
  return rawData.split("\n");
}

function orderLetters(word) {
  const lowWord = word.toLowerCase();
  const hashed = lowWord.split("").sort().join("");
  return hashed;
}

function add2Dictionary(word, dictionary = new Map()) {
  const hashed = orderLetters(word),
    wordBranch = createHashedBranch(hashed, dictionary);
  if (!wordBranch.has("words")) {
    wordBranch.set("words", []);
    wordBranch.set("longestWord", word.length);
  }
  const words = wordBranch.get("words"),
    longest = wordBranch.get("longestWord");
  if (word.length > longest) wordBranch.set("longestWord", word.length);
  words.push(word);
}

function createHashedBranch(hash, dictionary, index = 0) {
  const letter = hash.charAt(index);
  if (!dictionary.has(letter)) {
    dictionary.set(letter, new Map());
    dictionary.set("longestWord", hash.length);
  }
  const branch = dictionary.get(letter),
    longest = branch.get("longestWord");
  if (hash.length > longest) branch.set("longestWord", hash.length);
  if (hash.length <= index + 1) {
    return branch;
  }
  return createHashedBranch(hash, branch, index + 1);
}

function traverseTrie(dictionary, letters, index = 0) {
  const letter = letters.charAt(index);
  if (dictionary.has(letter)) {
    const branch = dictionary.get(letter),
      words = branch.get("words");
    if (letters.length === index + 1 && branch.has("words")) {
      if (branch.has("words")) return words;
      return null;
    }
    const deepWords = traverseTrie(branch, letters, index + 1);
    return Array.isArray(deepWords) ? deepWords : words;
  } else {
    return null;
  }
}

const words = getWords(),
dictionary = new Map();

for (const word of words) {
  add2Dictionary(word, dictionary);
}

function getLongestCombination(letters, combination = "", maxLength=0) {
  if(letters.length ===1) {
    const words = traverseTrie(dictionary,combination+letters) || [""], word = words[0];
    return word;
  };
  let longestWord = "";
  for (let i = 0; i < letters.length-1; ++i) {
    const max = maxLength || letters.length-1-i;
    const letter = letters.charAt(i),
      word = getLongestCombination(letters.substring(i+1),combination + letter, max);
      if(longestWord.length < word.length){
        longestWord = word;
        if(longestWord.length >= max) return longestWord;
      } 
  }
  return longestWord;
}

function getLongestWordOf(letters) {
  if (typeof letters !== "string") throw new TypeError("Input a proper string");
  const sorted = orderLetters(letters),
    longest = getLongestCombination(sorted);
  return longest;
}

module.exports = getLongestWordOf;
