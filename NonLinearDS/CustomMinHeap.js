/**
 * This class is a Minimum BinaryTree implementation of the Data Structure.
 * The class/structure follows the rules such that:
 *  1. The root element must always be smaller than the child elements in terms of value
 *  2. The integrity or property of the structure must be maintained when being manipulated:
 *      i.e.: the same rules must be followed before and after the manipulation.
 */

class MinHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    //method used to remove the minimum value from the heap
    popMin() {
        //check if the heap is empty
        if (this.size === 0) {
            return null;
        }
        console.log(`\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`);
        //swapping the minimum element with the last element
        this.swap(1, this.size);
        //removing the last element
        const min = this.heap.pop();
        //decrementing heap size by 1
        this.size--;
        console.log(`.. Removed ${min} from heap`);
        console.log('..',this.heap);
        //normalize heap by moving values down
        this.heapify();
        //return the removed minimum value
        return min;        
    }

    //method used to add value to the heap
    add(value) {
        console.log(`..adding ${value}`);
        //pushing the new value into the heap
        this.heap.push(value);
        //incrementing the heap size
        this.size++;
        //moving values up to normalize the heap
        this.bubbleUp();
        console.log(`added ${value} to heap`, this.heap);
    }

    //method used to move a value up the tree
    bubbleUp() {
        //setting the index for the current element to the size of the heap
        let current = this.size;
        //check if the heap is empty, if not, swap the current element with the parent element
        while (current > 1 && this.heap[current] < this.heap[getParent(current)]) {
            console.log('..', this.heap);
            console.log(`.. swap index ${current} with ${getParent(current)}`);
            this.swap(current, getParent(current));
            current = getParent(current);
        }
    }

    //method used to move a value down the tree
    heapify() {
        let current = 1;
        let leftChild = getLeft(current);
        let rightChild = getRight(current);

        while (this.canSwap(current, leftChild, rightChild)) {
            if (this.exists(leftChild) && this.exists(rightChild)) {
                if (this.heap[leftChild] < this.heap[rightChild]) {
                    this.swap(current, leftChild);
                    return current = leftChild;
                }
                this.swap(current, rightChild);
                return current = rightChild;
            }
            this.swap(current, leftChild);
            current = leftChild;
            leftChild = getLeft(current);
            rightChild = getRight(current);
        }
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    exists(index) {
        return index <= this.size;
      }
    
    canSwap(current, leftChild, rightChild) {
        // Check that one of the possible swap conditions exists
        return (
            this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
            || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
        );
    }
}

const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

module.exports = MinHeap;