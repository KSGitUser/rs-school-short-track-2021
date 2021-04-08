/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.innerStack = [];
  }

  push(element) {
    this.innerStack.push(element);
  }

  pop() {
    return this.innerStack.pop();
  }

  peek() {
    if (this.innerStack.length) {
      return this.innerStack.slice(-1)[0];
    }
    return undefined;
  }
}

module.exports = Stack;
