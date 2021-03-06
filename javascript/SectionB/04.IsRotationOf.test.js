const isRotationOf = require("./04.IsRotationOf");

describe("Function that checks if a string is a rotation of another", () => {
  test(`If you don't input 2 strings, it throws`, () => {
    expect(() => isRotationOf()).toThrow();
  });

  test(`Simple rotated word case`, () => {
    expect(isRotationOf("square", "resqua")).toBeTruthy();
  });

  test(`Not rotated words`, () => {
    expect(isRotationOf("hello", "world")).toBeFalsy();
  });

  test("hello rotation", () => {
    expect(isRotationOf("hello", "lohel")).toBeTruthy();
  });
});
