function levenshtein(str1, str2) {
  if (typeof str1 != "string" || typeof str2 != "string")
    throw new TypeError("You must input strings only");
  let large, short;
  if (str1.length > str2.length) [large, short] = [str1, str2];
  else [large, short] = [str2, str1];
  let initial = new Array(large.length + 1).fill(0).map((v, i) => i);
  for (let i = 0; i < short.length; ++i) {
    const compared = [];
    for (let j = 0; j < large.length; ++j) {
      if (j === 0) compared[j] = initial[j] + 1;
      const largeLetter = large.charAt(j), shortLetter = short.charAt(i);
      if(largeLetter === shortLetter) {
        compared[j+1] = initial[j];
      } else {
        const min = Math.min(compared[j], initial[j], initial[j+1]);
        compared[j+1] = min+1;
      }
    }
    initial = compared;
  }
  return initial[large.length];
}

module.exports = levenshtein;
