import analyzeArray from "../analyzeArray";

test("get analyze array average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("get analyze array min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});
