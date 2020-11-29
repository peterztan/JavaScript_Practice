class CustomDLLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    setNextNode(node) {
        if (node instanceof CustomDLLNode || node === null) {
            return this.next = node;
        }
        throw new Error("This node is not an instance of CustomDLLNode.");
    }

    setPreviousNode(node) {
        if (node instanceof CustomDLLNode || node === null) {
            return this.previous = node;
        }
        throw new Error("This node is not an instance of CustomDLLNode.");
    }

    getNextNode() {
        return this.next;
    }

    getPreviousNode() {
        return this.previous;
    }
}

/* const newNode = new CustomDLLNode;
newNode.setNextNode(new CustomDLLNode("Next Node"));
console.log(newNode.getNextNode().data); */

module.exports = CustomDLLNode;