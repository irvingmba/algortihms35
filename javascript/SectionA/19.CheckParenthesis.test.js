const checkParenthesis = require("./19.CheckParenthesis");

describe("Testing function that check parenthesis are balanced", () => {
    test("If you don't input a string, it will throw", () => {
        expect(()=>checkParenthesis()).toThrow();
    });

    test("Case 1", () => {
        expect(checkParenthesis("(())")).toBe(0);
    });

    test("Case 2", () => {
        expect(checkParenthesis("))")).toBe(2);
    });

    test("Unordered parenthesis", () => {
        expect(checkParenthesis("))((")).toBe(4);
    })
});