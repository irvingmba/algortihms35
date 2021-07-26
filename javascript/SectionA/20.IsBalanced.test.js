const isBalanced = require("./20.IsBalanced");

describe("Testing function that checks if an expression is balanced", () => {
  test("If function does not get a text, it will throw", () => {
    expect(() => isBalanced()).toThrow();
  });

  test("Simple balanced expression", () => {
    const expression = "hello (t{h[e]r}e) world";
    expect(isBalanced(expression)).toBe(true);
  });

  test("Very unbalanced expression", () => {
    const expression = "h)e(ll]o [wo{r}ld";
    expect(isBalanced(expression)).toBe(false);
  });

  test("Mixed good expression", () => {
    const expression = "(--[-{-(--[[--{-}-]-]-)---}---]--)";
    expect(isBalanced(expression)).toBe(true);
  });

  test("Mixed bad expression", () => {
    const expression = "([[{{([])}]}])";
    expect(isBalanced(expression)).toBe(false);
  });

});
