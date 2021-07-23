const shuffleArray = require("./10.ShuffleArray");

describe("Testing function to suffle an array", () => {
  test.each([{}, "string", 123])("When it gets %s, it throws", (input) => {
      expect(()=>shuffleArray(input)).toThrow();
  });

  test("Simple case", () => {
      const sample = [1,2,3,4,5];
      const shuffled = shuffleArray([...sample]);
      expect(shuffled).not.toEqual(sample);
  })

  test("Second case", () => {
    const sample = [1,2,3,4,5,6,7,8,9,10,11,12];
    const shuffled = shuffleArray([...sample]);
    expect(shuffled).not.toEqual(sample);
})

test("Mini case", () => {
    const sample = [1,2];
    const shuffled = shuffleArray([...sample]);
    expect(shuffled).not.toEqual(sample);
})

});
