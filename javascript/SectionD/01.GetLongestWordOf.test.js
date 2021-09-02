const getLongestWordOf = require("./01.GetLongestWordOf")

describe("Function that finds the longest word of a bunch of letters", () => {
    test("If input is not string, it throws", () => {
        expect(()=>getLongestWordOf()).toThrow();
    })

    test("Simple case where it uses all letters", () => {
        const letters = "uajryan",longest = getLongestWordOf(letters);
        expect(longest).toHaveLength(letters.length);
    })

    test("Case where remain letters", () => {
        const letters = "uajryanxtz",longest = getLongestWordOf(letters);
        expect(longest).toMatch("january");
    })
})