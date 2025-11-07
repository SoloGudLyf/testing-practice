export default function capitalize(string) {
  let stringArr = Array.from(string);
  let restOfStr = stringArr.slice(1);
  return stringArr[0].toUpperCase() + restOfStr.join("");
}
