/**
 * This class is special in the way that each TreeNode is an instance of a BinaryTree.
 * 1. Each instance of the BinaryTee only has two child nodes.
 * 2. Each instance of the tree has two sides: Left and Right, where the Left child node
 *      will always be smaller than the parent node, and the Right child node will always
 *      be larger than the parent node.
 */

class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value);
      }
      return (this.left = new BinaryTree(value, this.depth + 1));
    }
    if (this.right) {
      return this.right.insert(value);
    }
    return (this.right = new BinaryTree(value, this.depth + 1));
  }

  getNodeByValue(value) {
    if (value === this.value) {
      return this;
    }
    if (this.left && value < this.value) {
      return this.left.getNodeByValue(value);
    }
    if (this.right) {
      return this.right.getNodeByValue(value);
    }
    return null;
  }

  /*
        Binary Tree Traversal:
        1. Preorder: this -> this.left -> this.right;
        2. Inorder: this.left -> this -> this.right => tree values sorted into sorted array in ascending order;
        3. Postorder:  this.left -> this.right -> this;
    */

  //this method is implemented with Inorder
  depthFirstTraversal() {
    if (this.left) {
      return this.left.depthFirstTraversal();
    }
    console.log(`Depth = ${this.depth}, Value = ${this.value};`);
    if (this.right) {
      return this.right.depthFirstTraversal();
    }
  }
}

module.exports = BinaryTree;
