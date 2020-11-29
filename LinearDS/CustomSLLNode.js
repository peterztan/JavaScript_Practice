class SLLNode {
    constructor (data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (node instanceof SLLNode || node === null) {
            return this.next = node;
        }
        throw new Error("This node is not an instance of the CustomSLLNode.");
    }

    getNextNode() {
        return this.next;
    }
}

module.exports = SLLNode;