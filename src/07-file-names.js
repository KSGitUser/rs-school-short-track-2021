/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameMap = new Map();
  names.forEach((name) => {
    if (nameMap.has(name)) {
      const newNum = nameMap.get(name) + 1;
      nameMap.set(name, newNum);
      nameMap.set(`${name}(${nameMap.get(name)})`, 0);
      return;
    }
    nameMap.set(name, 0);
  });
  return [...nameMap.keys()];
}

module.exports = renameFiles;
