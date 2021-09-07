function getLCS(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string")
    throw new TypeError("Input 2 proper strings");
  let matched = new Array(str2.length + 1).fill(0);
  for (let i = 0; i < str1.length; ++i) {
    const letterA = str1.charAt(i),
      matching = [0];
    for (let j = 0; j < str2.length; ++j) {
      const currentLetter = str2.charAt(j);
      if (letterA === currentLetter) {
        matching[j + 1] = matched[j] + 1;
      } else {
        matching[j + 1] = Math.max(matching[j], matched[j + 1]);
      }
    }
    matched = matching;
    // console.log(matched);
  }
  return matched[matched.length-1];
}

module.exports = getLCS;
