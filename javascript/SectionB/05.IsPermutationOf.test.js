const isPermutationOf = require("./05.IsPermutationOf");

describe("Function that checks if a word is a permutation of another", () => {
    test(`If you don't input 2 strings, it throws`, () => {
        expect(()=>isPermutationOf()).toThrow();
    })

    test(`Simple permutation case`, () => {
        expect(isPermutationOf('ward', 'draw')).toBeTruthy();
    })

    test(`When there is not permutation, it's false`, () => {
        expect(isPermutationOf('hello', 'world')).toBeFalsy();
    })

});