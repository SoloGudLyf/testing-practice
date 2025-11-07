import obj from "./index.js";

test("Capitalize", () => {
  expect(obj.capitalize("hello")).toBe("Hello");
});

test("Capitalize", () => {
  expect(obj.capitalize("world")).toBe("World");
});

test("Reverse String", () => {
  expect(obj.reverseString("hello")).toBe("olleh");
});

test("Reverse String", () => {
  expect(obj.reverseString("world")).toBe("dlrow");
});

test("Add 2 numbers", () => {
  expect(obj.calculator.add(3, 5)).toBe(8);
});

test("Add 2 numbers", () => {
  expect(obj.calculator.add(9, 5)).toBe(14);
});

test("Multiply 2 numbers", () => {
  expect(obj.calculator.multiply(20, 5)).toBe(100);
});

test("Divide 2 numbers", () => {
  expect(obj.calculator.divide(20, 5)).toBe(4);
});

test("Divide 2 numbers", () => {
  expect(obj.calculator.divide(20, 4)).toBe(5);
});
