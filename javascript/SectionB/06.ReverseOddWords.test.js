const reverseOddWords = require("./06.ReverseOddWords");

describe("Function that reverse odd words in a sentence", () => {
  test("If you don't input a sentence, it will throw", () => {
    expect(() => reverseOddWords()).toThrow();
  });

  test("Reversing a simple sentence", () => {
      const sentence = "hello world friends";
      expect(reverseOddWords(sentence)).toMatch("olleh dlrow sdneirf");
  })

  test("Not reversing even words", () => {
      const sentence = "four mice eating";
      expect(reverseOddWords(sentence)).toMatch(sentence);
  })

  test("Mixed setence", () => {
      const sentence = "i saw two cats in my house";
      expect(reverseOddWords(sentence)).toMatch("i was owt cats in my esuoh");
  })
});
