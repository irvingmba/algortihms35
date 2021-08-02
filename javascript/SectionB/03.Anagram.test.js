const anagram = require("./03.Anagram");

describe("Function that finds the anagram of a word", () => {
  test("If you don't input a word, it throws", () => {
    expect(() => anagram()).toThrow();
  });

  test("Find simple anagram", () => {
    const word = "salt";
    const anagrammed = anagram(word);
    expect(anagrammed).not.toMatch(word);
    expect(anagrammed).toEqual(expect.any(String));
  })

  test("Other word", () => {
    const word = "friend";
    const anagrammed = anagram(word);
    expect(anagrammed).not.toMatch(word);
    expect(anagrammed).toEqual(expect.any(String));
  })

  test("Anagram not found", () => {
    const word = "cellphone";
    const anagrammed = anagram(word);
    expect(anagrammed).toBeNull()
  })

});
