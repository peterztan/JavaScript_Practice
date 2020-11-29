const DLLNode = require("./CustomDLLNode.js");

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(data) {
        const newHead = new DLLNode(data);
        const currentHead = this.head;
        if (currentHead) {
            currentHead.setPreviousNode(newHead);
            newHead.setNextNode(currentHead);
        }
        this.head = newHead;
        if (!this.tail) {
            this.tail = newHead;
        }
    }

    addToTail(data) {
        const newTail = new DLLNode(data);
        const currentTail = this.tail;
        if (currentTail) {
            currentTail.setNextNode(newTail);
            newTail.setPreviousNode(currentTail);
        }
        this.tail = newTail;
        if (!this.head) {
            this.head = newTail;
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        if (this.head) {
            this.head.setPreviousNode(null);
        }
        if (removedHead === this.tail) {
            this.removeTail();
        }
        return removedHead.data;
    }

    removeByData(data) {
        let nodeToRemove;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                nodeToRemove = currentNode;
                break;
            }
            currentNode = currentNode.getNextNode();
        }
        if (!nodeToRemove) {
            return null;
        }
        switch (nodeToRemove) {
            case this.head:
                this.removeHead();
                break;
            case this.tail:
                this.removeTail();
                break;
            default:
                const nextNode = nodeToRemove.getNextNode();
                const previousNode = nodeToRemove.getPreviousNode();
                nextNode.setPreviousNode(previousNode);
                previousNode.setNextNode(nextNode);
                break;
        }
        return nodeToRemove;
    }

    removeTail() {
        const removedTail = this.tail;
        if (!removedTail) {
            return;
        }
        this.tail = removedTail.getPreviousNode();
        if (this.tail) {
            this.tail.setNextNode(null);
        }
        if (removedTail === this.head) {
            this.removeHead();
        }
        return removedTail.data;
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

module.exports = DLL;