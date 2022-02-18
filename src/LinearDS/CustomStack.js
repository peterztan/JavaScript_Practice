const SLL = require('./CustomSLL');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new SLL();
    this.size = 0;
    this.maxSize = maxSize;
  }

  //this method checks if the stack has room for new pushes
  hasRoom() {
    return this.size < this.maxSize;
  }

  //this method checks if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  //this method pushes new data onto the top of the stack
  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
      return;
    }
    throw new Error('Stack is full.');
  }

  //this method views and removes the top node of the stack
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty.');
    }
    const value = this.stack.removeHead();
    this.size--;
    return value;
  }

  //this method only views the top node of the stack
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.head.data;
  }
}

module.exports = Stack;
