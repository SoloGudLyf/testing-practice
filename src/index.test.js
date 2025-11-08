import obj from "./index.js";

test("Capitalize 'hello' string", () => {
  expect(obj.capitalize("hello")).toBe("Hello");
});

test("Capitalize 'world'", () => {
  expect(obj.capitalize("world")).toBe("World");
});

test("Reverse 'hello' String ", () => {
  expect(obj.reverseString("hello")).toBe("olleh");
});

test("Reverse 'world' String", () => {
  expect(obj.reverseString("world")).toBe("dlrow");
});

test("Add 3 and 5 numbers", () => {
  expect(obj.calculator.add(3, 5)).toBe(8);
});

test("Add 9 and 5 numbers", () => {
  expect(obj.calculator.add(9, 5)).toBe(14);
});

test("Multiply 20 and 5 numbers", () => {
  expect(obj.calculator.multiply(20, 5)).toBe(100);
});

test("Divide 20 by 5 numbers", () => {
  expect(obj.calculator.divide(20, 5)).toBe(4);
});

test("Divide 20 by 4 numbers", () => {
  expect(obj.calculator.divide(20, 4)).toBe(5);
});

test("Caesar Cipher", () => {
  expect(caesarCipher("xyz", 3).toBe("abc"));
});
