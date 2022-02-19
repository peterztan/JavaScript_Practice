const Graph = require("./GraphDS/CustomGraph");

const weightedTestGraph = new Graph(true, true);
const a = weightedTestGraph.addVertex('A');
const b = weightedTestGraph.addVertex('B');
const c = weightedTestGraph.addVertex('C');
const d = weightedTestGraph.addVertex('D');
const e = weightedTestGraph.addVertex('E');
const f = weightedTestGraph.addVertex('F');
const g = weightedTestGraph.addVertex('G');

weightedTestGraph.addEdge(a, c, 100);
weightedTestGraph.addEdge(a, b, 3);
weightedTestGraph.addEdge(a, d, 4);
weightedTestGraph.addEdge(d, c, 3);
weightedTestGraph.addEdge(d, e, 8);
weightedTestGraph.addEdge(e, b, -2);
weightedTestGraph.addEdge(e, f, 10);
weightedTestGraph.addEdge(b, g, 9);
weightedTestGraph.addEdge(e, g, -50);

module.exports = weightedTestGraph;