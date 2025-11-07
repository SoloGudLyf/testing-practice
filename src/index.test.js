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
