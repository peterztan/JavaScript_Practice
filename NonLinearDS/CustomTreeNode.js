class CustomTreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    addChild(child) {
        if (child instanceof CustomTreeNode) {
            return this.children.push(child);
        }
        return this.children.push(new CustomTreeNode(child));
    }

    removeChild(childToRemove) {
        const length = this.children.length;
        this.children = this.children.filter(child => {
            return childToRemove instanceof CustomTreeNode
            ? child !== childToRemove
            : child.data !== childToRemove;
        });

        if (length === this.children.length) {
            this.children.forEach(child => child.removeChild(childToRemove));
        }
    }

    print(level = 0) {
        let result = '';
        for (let i = 0; i < level; i++) {
            result += '-- ';
        }
        console.log(`${result}${this.data}`);
        this.children.forEach(child => child.print(level + 1));
    }

    depthFirstTraversal() {
        console.log(this.data);
        this.children.forEach(child => child.depthFirstTraversal());
    }

    breadthFirstTraversal() {
        let queue = [this];
        while (queue.length !== 0) {
            const current = queue.shift();
            console.log(current.data);
            queue = queue.concat(current.children);
        }
    }
}

module.exports = CustomTreeNode;