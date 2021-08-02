const fs = require("fs");
const path = require("path");

function anagram(word) {
  if (typeof word != "string" || word.includes(" "))
    throw new TypeError("Input a proper word without blank characters");
  const hashed = hashWord(word);
  if (dictionary.has(hashed)) {
    const words = dictionary.get(hashed);
    const found = words.find((chosen) => chosen != word);
    return found || null;
  } else {
    console.error("This word does not have an anagram");
    return null;
  }
}

function hashWord(word) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const lowWord = word.toLowerCase();
  let hashed = "";
  for (const letter of abc) {
    if (lowWord.includes(letter)) {
      for (const wordLetter of lowWord) {
        if (wordLetter === letter) hashed += wordLetter;
      }
    }
  }
  return hashed;
}

function putInDictionary(dictionary, key, value) {
  if (dictionary.has(key)) {
    const words = dictionary.get(key);
    words.push(value);
  } else {
    dictionary.set(key, [value]);
  }
  return dictionary;
}

let rawData;
try {
  rawData = fs.readFileSync(
    path.resolve(__dirname, "../utils/english3.txt"),
    "utf8"
  );
} catch (error) {
  console.error(error);
}

const words = rawData.split("\n");

const dictionary = new Map();

for (const word of words) {
  putInDictionary(dictionary, hashWord(word), word);
}

module.exports = anagram;
