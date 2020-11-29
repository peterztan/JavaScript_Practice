const CustomSLL = require("./CustomSLL");

//Boounded Queues are Queues with a max queue size
class CustomBoundedQueue {
    constructor(maxSize = Infinity) {
        this.queue = new CustomSLL;
        this.size = 0;
        this.maxSize = maxSize;
    }

    //view the front node
    peek() {
        return this.queue.head.data;
    }

    //Check if the queue has any room
    hasRoom() {
        return this.size < this.maxSize;
    }

    //Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    //add new item to the Queue
    enqueue(data) {
        if (!this.hasRoom()) {
            throw new Error("Queue is already full!");
        }
        this.queue.addToTail(data);
        this.size++;
    }

    //remove item from Queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is already empty!");
        }
        const data = this.queue.removeHead();
        this.size--;
        return data;
    }
}

module.exports = CustomBoundedQueue;

// const newQueue = new CustomBoundedQueue;
// newQueue.dequeue();