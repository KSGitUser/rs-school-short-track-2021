/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let numberArr = [];
  const freeArr = arr.map((item) => {
    if (item === -1) {
      return -1;
    }
    numberArr.push(item);
    return null;
  });
  numberArr = numberArr.sort((a, b) => a - b);
  let idx = 0;
  return freeArr.map((item) => {
    if (item) {
      return item;
    }
    return numberArr[idx++];
  });
}

module.exports = sortByHeight;
