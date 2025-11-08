export default function analyzeArray(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const sum = arr.reduce((prev, curr) => (prev += curr), 0);

  return {
    average: sum / arr.length,
    min,
    max,
    length: arr.length,
  };
}
