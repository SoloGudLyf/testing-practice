import ccObj from "./caesar-cipher.js";

test("Caesar Cipher 'xyz' to be 'abc'", () => {
  expect(ccObj.caesarCipher("xyz", 3)).toBe("abc");
});

test("Caesar Cipher 'xYz' to be 'aBc'", () => {
  expect(ccObj.caesarCipher("xYz", 3)).toBe("aBc");
});

test("Caesar Cipher 'Hello, World!' to be 'Khoor, Zruog!'", () => {
  expect(ccObj.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
