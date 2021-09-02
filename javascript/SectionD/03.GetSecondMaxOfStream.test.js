const getSecondMaxOfStream = require("./03.GetSecondMaxOfStream");
const path = require("path");

describe("Function that gets the second maximum number from a stream", () => {
    test("If function does not get a file, it throws", () => {
        expect(()=>getSecondMaxOfStream()).toThrow();
    })

    test("Simple case", async () => {
        const filePath = path.resolve(__dirname, "../utils/stream.txt");
        const max2 = await getSecondMaxOfStream(filePath);
        expect(max2).toBe(100);
    })

});