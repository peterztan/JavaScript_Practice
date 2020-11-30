# CS Fundamentals

### This is a collection of common CS algorithms and data structures (implementations are done in JavaScript)

#### Custom Hashmap:
- Hashmaps: One of the most efficient data structures to use in order to store and retrieve data due to the association between keys and values for faster retrieval.

#### Linear Data Structures:
- Nodes: Basic building blocks for many of the data structures
- Singly Linked Lists: Unidirectional alternative array-like structure composed of SLL-Nodes with attributes such as `data` and `next`
- Doubly Linked Lists: Bidirectional alternative array-like structure composed of DLL-Nodes with attributes such as `data`, `next` and `previous`
- Queues: A Singly Linked List with methods to `enqueue` (add nodes to the tail) or `dequeue` (remove nodes from the head), represents an actual Queue
- Stacks: Also a singly linked list, but with methods to `add` (add nodes to the head/top) or `pop` (remove nodes from the top), represents an actual stack

#### Non-Linear Data Structures:
- Trees: Structure used to store information with heirarchical relationships. Composed of special nodes called `TreeNodes`
- Binary Search Trees: A special type of Tree data structure where each TreeNode only has two children, and the left child node has to be less than the parent node, and the right child node has to be more than the parent node. Additionally, eadh subtree is also a BST itself.
- Heaps: Yet another special type of Tree data structure. It is often used to keep track of a minimum or a maximum value held within. The root node of this structure typically holds data that is either smaller than the data held in subsequent child nodes, or bigger than the data held in subsequent child nodes

#### Graph Data Structures:
- Graphs: A data structure used to represent networks between things. It is typically composed of nodes called `Vertex`, and is connected to other `vertices` via an `Edge`. In a `weighted` graph, there is also an attribute called `Cost` associated with each `edge` such that the shortest path through a graph may not be the least expensive.

#### Algorithms:
- Iteration: Repetitive execution of a block of code or function until a condition has been met
- Recursion: Function calling within itself. Typically with a `base step` and a `recursive step`
- Inorder Tree Traversal: In order of nodes traversed `Left -> Root -> Right`
- Preorder Tree Traversal: In order of nodes traversed `Root -> Left -> Right`
- Postorder Tree Traversal: In order of nodes traversed `Left -> Right -> Root`
- Breadth-First-Search Tree Traversal: Algorithm for finding a value in a `Tree` structure by going through every neighboring TreeNodes
- Depth-First-Search Tree Traversal: Algorithm for finding a value in a `Tree` structure by going down the tree until a `leaf` node is reached
- Binary Search: A `Divide and Conquer` approach to find data in a sorted array in `O(log N)` time, where the size of the input is cut in half with each iteration
- Bubble Sort: A sorting algorithm that sorts an array of data by swapping adjacent elements in `O(N^2)` time
- Merge Sort: A sorting algorithm that sorts an array of data by first `splitting` them and then `merging` them into a sorted array in `O(N*log N)` time
- Quick Sort: A `Divide and Conquer` approach to sort an array of data by using a `pivot` and breaking the array into sub-arrays with at most one element, then values in the rest of the array get compared to the `pivot` and put into one of three groups -> a group of values smaller than the `pivot`, the `pivot` itself, and a group of values larger than the `pivot`
- Breadth-First-Search Graph Traversal: Useful for figuring out shortest paths through a graph but very inefficient. It checks every neighboring vertices in a graph before going down a level of depth. The run time formula for this search algorithm is `O(vertices + edges)`
- Depth-First-Search Graph Traversal: Useful for determining whether a path exists between two vertices, and for solving problems with a singular correct answer such as Sudoku. Can be used for topological sorting and cycle detection. The run time formula for this search algorithm is `O(vertices + edges)`
- Djikstra's Algorithm: An algorithm used to find the shortest distance between vertices in a ***weighted*** graph. It does this by utilizing a ***BFS*** approach and keeping track of and updates distances between vertices
- DFS Preorder Graph Traversal: each vertex is added to the `visited` list and added to the output list ***BEFORE*** getting `added` to the `stack`
- DFS Postorder Graph Traversal: each vertex is added to the `visited` list and added to the output list ***AFTER*** it is `popped` off the `stack`
- DFS Reverse Postorder Graph Traversal: Also called Topological Sort. Returns a list that is exactly the ***reverse*** of the postorder list