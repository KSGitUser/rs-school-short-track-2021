/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = matrix[0].reduce((a, c) => a + c, 0);
  if (matrix.length <= 1) {
    return result;
  }
  for (let i = 1; i < matrix.length; i++) {
    result += matrix[i].reduce((a, c, index) => {
      if (matrix[i - 1][index] > 0) {
        return a + c;
      }
      return a;
    }, 0);
  }
  return result;
}

module.exports = getMatrixElementsSum;
