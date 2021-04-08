/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let innerList = { ...l };
  const newList = (list) => {
    Object.assign(list, {}, { ...list });
    if (list.value === k) {
      Object.assign(list, {}, { value: list.next.value, next: list.next.next });
    }
    if (list.next) {
      newList(list.next, k);
    }
    return list;
  };
  innerList = newList(innerList);

  return innerList;
}

module.exports = removeKFromList;
