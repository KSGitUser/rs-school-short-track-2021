/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrStr = str.split('');
  let newArray = [];
  let charCount = 1;
  const replaceNumberChar = () => {
    newArray = [
      ...newArray.slice(0, newArray.length - 1),
      charCount,
      newArray[newArray.length - 1],
    ];
  };
  arrStr.forEach((char, index) => {
    if (index === 0) {
      newArray.push(char);
      return;
    }
    if (char === newArray[newArray.length - 1]) {
      charCount += 1;
      if (index === arrStr.length - 1) {
        replaceNumberChar();
      }
    } else {
      replaceNumberChar();
      newArray.push(char);
      charCount = 1;
    }
  });

  return newArray.join('').replace(/1/gi, '');
}

module.exports = encodeLine;
