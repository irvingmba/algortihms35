const getSeqSum = require("./08.GetSeqSum")

describe("Function that returns the sequence of numbers which total in equal to the input", () => {
    test("If you don't input a number, it will throw", () => {
        expect(()=>getSeqSum()).toThrow();
    })

    test("Exact number", () => {
        const expected = [1,2,3];
        expect(getSeqSum(6)).toEqual(expected);
    })

    test("Exact number", () => {
        const expected = [4];
        expect(getSeqSum(4)).toEqual(expected);
    })

    test("Bigger number", () => {
        const expected = [1,2,3,4,5,6,7];
        expect(getSeqSum(28)).toEqual(expected);
    })

    test("Start not in 1", () => {
        const expected = [3,4,5,6,7];
        expect(getSeqSum(25)).toEqual(expected);
    })

    test("Big number, short sequence", () => {
        const expected = [11,12];
        expect(getSeqSum(23)).toEqual(expected);
    })

})