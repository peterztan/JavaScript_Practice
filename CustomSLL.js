const CustomSLLNode = require ("./CustomSLLNode.js");

class CustomSLL {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new CustomSLLNode(data);
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
            return tail.setNextNode(new CustomSLLNode(data));
        }
        return this.head = new CustomSLLNode(data);
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
}

module.exports = CustomSLL;