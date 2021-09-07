const getUniqueWord = require("./07.GetUniqueStr");

describe("Function that returns all unique characters", () => {
    test("If input is not a string, it throws", () => {
        expect(()=>getUniqueWord()).toThrow();
    })

    test("Simple case", () => {
        const word = "something", unique = getUniqueWord(word);
        expect(unique).toHaveLength(word.length);
        expect(unique).toMatch(word);
    })

    test("Repeated word", () => {
        const word = "repeated", unique = getUniqueWord(word), expected = "repatd";
        expect(unique).toHaveLength(expected.length);
        expect(unique).toMatch(expected);
    })
});