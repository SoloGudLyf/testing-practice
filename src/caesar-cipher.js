const lowerCaseAlphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseAlphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const punctuations = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

function caesarCipher(string, shift) {
  string = Array.from(string);
  // Get Array to encode/decode string
  const shiftedlowerCase = getShiftArr(lowerCaseAlphabets, shift);

  const shiftedUpperCase = getShiftArr(upperCaseAlphabets, shift);
  const caesarCipherArr = [];
  for (const element of string) {
    if (punctuations.includes(element) || element.trim() === "") {
      console.log("hi");

      caesarCipherArr.push(element);
    } else if (element === element.toLowerCase()) {
      const letterIndex = shiftedlowerCase.findIndex(
        (letter) => letter === element,
      );

      caesarCipherArr.push(lowerCaseAlphabets[letterIndex]);
    } else if (element === element.toUpperCase()) {
      const letterIndex = shiftedUpperCase.findIndex(
        (letter) => letter === element,
      );

      caesarCipherArr.push(upperCaseAlphabets[letterIndex]);
    }
  }
  return caesarCipherArr.join("");
}

function getShiftArr(arr, shift) {
  const shiftedArr = [];
  for (let index = 0; index < 26; index++) {
    if (index - shift === -1) {
      shiftedArr.push(arr.slice(-1).join(""));
      continue;
    }
    if (index - shift < 0) {
      shiftedArr.push(arr.slice(index - shift, index - shift + 1).join(""));
      continue;
    }
    shiftedArr.push(arr[index - shift]);
  }
  return shiftedArr;
}

export default { caesarCipher, getShiftArr };
