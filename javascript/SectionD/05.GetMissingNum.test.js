const getMissingNum = require("./05.GetMissingNum");

describe("Function that finds a missing number", () => {
    test("If you don't input and array, it will throw", () => {
        expect(()=>getMissingNum()).toThrow();
    })

    test("Simple case", () => {
        const numbers = [1,2,3,4,5,7,8,9];
        expect(getMissingNum(numbers)).toBe(6);
    })
});