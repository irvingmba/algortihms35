const maxArrayValue = require("./01.maxArrayValue");

describe("Testing function to get max value from array", () => {
    test("It will return the max value froma array", () => {
        const max = maxArrayValue([5,2,7,9,1,10]);
        expect(max).toBe(10)
    });
});