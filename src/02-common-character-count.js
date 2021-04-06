/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split('');
  let s2Arr = s2.split('');
  const commonChar = [];
  s1Arr.forEach((char) => {
    const foundIndex = s2Arr.indexOf(char);
    if (foundIndex >= 0) {
      commonChar.push(char);
      s2Arr = [...s2Arr.slice(0, foundIndex), ...s2Arr.slice(foundIndex + 1)];
    }
  });
  return commonChar.length;
}

module.exports = getCommonCharacterCount;
