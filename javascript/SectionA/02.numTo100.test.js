const numTo100 = require("./02.numTo100");

// __spies__
const spyPrint = jest.spyOn(console, "log");
// spyPrint.mockImplementation(jest.fn());

describe("Testing function that prints a serie from 1 to 100", () => {
  test("Prints from 1 to 100", () => {
    numTo100();
    for(let i=1; i<=100; ++i){
        expect(spyPrint).toHaveBeenCalledWith(i);
    }
  });
});
