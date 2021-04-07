/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let foundIndex;
  let minIndex = 0;
  let maxIndex = array.length - 1;
  while (maxIndex + 1 > minIndex) {
    const mid = minIndex + Math.floor((maxIndex - minIndex) / 2);
    if (array[mid] < value) {
      minIndex = mid + 1;
    }
    if (array[mid] > value) {
      maxIndex = mid - 1;
    }
    if (array[mid] === value) {
      foundIndex = mid;
      break;
    }
  }
  return foundIndex;
}

module.exports = findIndex;
