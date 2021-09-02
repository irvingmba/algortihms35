const getSecondMax = require("./02.GetSecondMax");

describe("Function that gets the second maximum number", () => {
    test("If function does not get a number array, it throws", () => {
        expect(()=>getSecondMax()).toThrow();
    })

    test("Simple case", () => {
        const numbers = [2,14,5,98,5,21,4,65,84];
        const max = Math.max(...numbers), max2 = getSecondMax(numbers);
        expect(max2).toBeLessThan(max);
        expect(max2).toBe(84);
    })

    test("First is bigger", () => {
        const numbers = [102,14,5,98,5,21,4,65,84];
        const max = Math.max(...numbers), max2 = getSecondMax(numbers);
        expect(max2).toBeLessThan(max);
        expect(max2).toBe(98);
    })

    test("Second is bigger", () => {
        const numbers = [102,104,5,98,5,21,4,65,84];
        const max = Math.max(...numbers), max2 = getSecondMax(numbers);
        expect(max2).toBeLessThan(max);
        expect(max2).toBe(102);
    })
});