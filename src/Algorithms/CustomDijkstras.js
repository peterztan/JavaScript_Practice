/**
 *  Dijkstra’s Algorithm works like the following:
    1. Instantiate a dictionary that will eventually map vertices to their distance from the start vertex
    2. Assign the start vertex a distance of 0 in a min heap
    3. Assign every other vertex a distance of infinity in a min heap
    4. Remove the vertex with the smallest distance from the min heap and set that to the current vertex
    5. For the current vertex, consider all of its adjacent vertices and calculate the distance to them as (distance to the current vertex) + (edge weight of current vertex to adjacent vertex).
    6. If this new distance is less than the current distance, replace the current distance.
    7. Repeat 4 and 5 until the heap is empty
    8. After the heap is empty, return the distances
 */

const weightedTestGraph = require('../CustomTestingWeightedGraph.js');
const PriorityQueue = require('../LinearDS/CustomPriorityQueue.js');

const dijkstras = (graph, startingVertex) => {
  const distances = {};
  const previous = {};
  const queue = new PriorityQueue();

  queue.add({vertex: startingVertex, priority: 0});

  graph.vertices.forEach(vertex => {
    distances[vertex.data] = Infinity;
    previous[vertex.data] = null;
  });

  distances[startingVertex.data] = 0;

  while (!queue.isEmpty()) {
    const {vertex} = queue.popMin();

    vertex.edges.forEach(edge => {
      const alternate = edge.weight + distances[vertex.data];
      const neighborValue = edge.end.data;

      if (alternate < distances[neighborValue]) {
        distances[neighborValue] = alternate;
        previous[neighborValue] = vertex;

        queue.add({vertex: edge.end, priority: distances[neighborValue]});
      }
    });
  }

  return {distances, previous};
};

const results = dijkstras(weightedTestGraph, weightedTestGraph.vertices[0]);
console.log(results);

module.exports = dijkstras;
