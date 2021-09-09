function getLargestRun(sample) {
  if (!(typeof sample === "string" || typeof sample === "number"))
    throw new TypeError("Input a proper string or number");
  const letters = sample.toString();
  let p1 = { letter: letters.charAt(0), index: 0 },
    p2 = { letter: letters.charAt(0), index: 0 },
    largest = { start: 0, end: 0, length: 0 };
  for (let i = 1; i < letters.length; ++i) {
    const letter = letters.charAt(i), previous = letters.charAt(i-1);
    if (letter !== p2.letter && p2.letter === p1.letter) {
      p2.index = i;
      continue;
    }
    if (letter !== previous) {
      if (letter !== p1.letter && letter !== p2.letter) {
        const currLength = i - p1.index;
        if (largest.length < currLength) {
          largest.start = p1.index;
          largest.end = i - 1;
          largest.length = currLength;
        }
        p1.letter = p2.letter;
        p1.index = p2.index;
      }
      p2.index = i;
    }
  }
  const currLength = sample.length - p1.index;
  if (largest.length < currLength) {
    largest.start = p1.index;
    largest.end = sample.length - 1;
    largest.length = currLength;
  }
  return sample.slice(largest.start, largest.end + 1);
}

module.exports = getLargestRun;
