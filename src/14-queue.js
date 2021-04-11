const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

// const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.innerSize = 0;
    const { value, next } = new ListNode();
    this.value = value;
    this.next = next;
  }

  get size() {
    return this.innerSize;
  }

  set size(value) {
    this.innerSize = value;
  }

  enqueue(element) {
    if (this.size) {
      const newNode = { value: element, next: null };
      newNode.next = { value: this.value, next: this.next };
      this.value = newNode.value;
      this.next = newNode.next;
      this.size += 1;
      return;
    }
    this.value = element;
    this.next = null;
    this.size += 1;
  }

  dequeue() {
    if (!this.size) {
      return null;
    }

    if (this.next === null) {
      this.size -= 1;
      return this.value;
    }

    let lastElem = this.next;
    let lastButOne = { value: this.value, next: this.next };
    while (lastElem.next) {
      lastButOne = lastElem;
      lastElem = lastElem.next;
    }

    lastButOne.next = null;
    this.size -= 1;
    const { value } = lastElem;
    return value;
  }
}

module.exports = Queue;
