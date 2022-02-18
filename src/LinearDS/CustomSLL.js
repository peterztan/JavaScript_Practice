const SLLNode = require('./CustomSLLNode.js');

class SLL {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new SLLNode(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (tail) {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      return tail.setNextNode(new SLLNode(data));
    }
    return (this.head = new SLLNode(data));
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }

  findNodeIteratively(data) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  findNodeRecursively(data, currentNode = this.head) {
    if (currentNode === null) {
      return null;
    }
    if (currentNode.data === data) {
      return currentNode;
    }
    return this.findNodeRecursively(data, currentNode.next);
  }
}

module.exports = SLL;
