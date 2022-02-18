const SLL = require('./CustomSLL');

class Queue {
  constructor() {
    this.queue = new SLL();
    this.size = 0;
  }

  //view the front node
  peek() {
    return this.queue.head.data;
  }

  //add new item to the Queue
  enqueue(data) {
    this.queue.addToTail(data);
    this.size++;
  }

  //remove item from Queue
  dequeue() {
    const data = this.queue.removeHead();
    this.size--;
    return data;
  }
}

module.exports = Queue;

// const testQueue = new Queue;
// testQueue.enqueue("New Item");
// testQueue.enqueue("Second Item");
// testQueue.peek();
