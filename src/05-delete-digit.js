/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strArr = n.toString().split('');
  const numberFromArr = (arr, i) => +[...arr.slice(0, i), ...arr.slice(i + 1)].join('');
  let maxNumber = numberFromArr(strArr, 0);
  strArr.forEach((char, index) => {
    const curNum = numberFromArr(strArr, index);
    if (curNum > maxNumber) {
      maxNumber = curNum;
    }
  });
  return maxNumber;
}

module.exports = deleteDigit;
