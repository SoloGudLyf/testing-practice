function capitalize(string) {
  let stringArr = Array.from(string);
  let restOfStr = stringArr.slice(1);
  return stringArr[0].toUpperCase() + restOfStr.join("");
}

function reverseString(string) {
  let stringArr = Array.from(string);
  let reverseStringArr = [];
  for (let index = stringArr.length; index > 0; index--) {
    reverseStringArr.push(stringArr[index - 1]);
  }
  return reverseStringArr.join("");
}

const calculator = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

export default { capitalize, reverseString, calculator };
