const findKMax = require("./04.FindKMax")

describe("Function that finds the kth max number", () => {
    test("If you don't input a number array, it will throw", () => {
        expect(()=>findKMax()).toThrow();
    })

    test("Simple case", () => {
        const numbers = [10,54,23,98,74,32,15,64,85,37,19];
        const max3 = findKMax(numbers,3);
        expect(max3).toBe(74);
    })
})