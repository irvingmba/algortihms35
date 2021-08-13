const reverseOddWords = require("./06.ReverseOddWords");

describe("Function that reverse odd words in a sentence", () => {
  test("If you don't input a sentence, it will throw", () => {
    expect(() => reverseOddWords()).toThrow();
  });

  test("Reversing a simple sentence", () => {
      const sentence = "hello world friends";
      expect(reverseOddWords(sentence)).toMatch("olleh world sdneirf");
  })

  test("Not reversing even words", () => {
      const sentence = "four mice eating";
      expect(reverseOddWords(sentence)).toMatch("ruof mice gnitae");
  })

  test("Mixed setence", () => {
      const sentence = "i saw two cats in my house";
      expect(reverseOddWords(sentence)).toMatch("i saw owt cats ni my esuoh");
  })
});
