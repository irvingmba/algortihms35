const routeFinder = require("./14.RouteFinder");

describe("Testing function to find all possible routes within an array", () => {
  test("If bad input, it will throw", () => {
    expect(() => routeFinder()).toThrow();
    expect(() =>
      routeFinder(
        [
          [1, 2],
          [1, 2],
        ],
        [3, 3],
        [0, 0]
      )
    );
  });

  test("Simple case", () => {
    const sample = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const routes = routeFinder(sample, [0,0], [1,1]);
    console.log(routes);
    expect(routes).toHaveLength(2);
  });
});
