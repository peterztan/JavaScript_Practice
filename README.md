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
- Dijkstra's Algorithm: An algorithm used to find the shortest distance between vertices in a ***weighted*** graph. It does this by utilizing a ***BFS*** approach and keeping track of and updates distances between vertices. The worst case runtime for this algorithm is `O((E+V)*log V)`
- DFS Preorder Graph Traversal: each vertex is added to the `visited` list and added to the output list ***BEFORE*** getting `added` to the `stack`
- DFS Postorder Graph Traversal: each vertex is added to the `visited` list and added to the output list ***AFTER*** it is `popped` off the `stack`
- DFS Reverse Postorder Graph Traversal: Also called Topological Sort. Returns a list that is exactly the ***reverse*** of the postorder list

#### ***BONUS***:
#### Whiteboarding:
The steps are:

1. ***Clarify the Problem***:
As the interviewer present the technical problem, repeat the question back to the interviewer in your own words as you think about any apparent misunderstandings. Then, ask every clarifying questions that come to mind.

2. ***Create Inputs***:
If the question is clear enough now, you should be able to give some inputs and outputs. What would be the most common application scenario regarding the problem at hand and what would the respective output be? Try to focus on an input that reflect a common usage first and then try to discuss edge cases with your interviewer.

3. ***Outline the Solution***:
What are the steps that would be required to solve the problem? Try to talk and break down the problem with the interviewer and ask for inputs on specifics regarding what the interviewer would like you to do, and be sure to incorporate the interviewer's input. Show your thorught process through dialogue and what kind of a co-worker you would potentially be.

4. ***Code the Solution***:
Talk as you write each step, explain what you are doing with the code you are writting in each step, face the interviewer when you explain and face the whiteboard when you write, make sure to keep the dialogue open with the interviewer.

5. ***Test the Solution***:
Use the input cases you wrote down earlier to test your algorithmic implementation of the problem, walk through the execution of your code which helps showcase your communication skills and catch any missed logical errors. If you do find any errors, stay calm and talk about what you can do to fix it. The interviewer may ask you to write the correction or be satisfied with the explanation.

6. ***Analyze the Solution***:
Analyze the space and time complexity of your code if you have not already. Talk through your logic as in why you think it is efficient/inefficient and whether or not there is a way to improve your solution. Again, communication is key. The interviewer may ask you to write out the optimized solution or be satisfied with an explanation.