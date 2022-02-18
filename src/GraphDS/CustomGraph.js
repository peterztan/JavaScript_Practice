const Vertex = require('./CustomVertex');

class Graph {
  constructor(isDirected = false, isWeighted = false) {
    this.vertices = [];
    this.isDirected = isDirected;
    this.isWeighted = isWeighted;
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);
    return newVertex;
  }

  removeVertex(vertex) {
    return (this.vertices = this.vertices.filter(v => v !== vertex));
  }

  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null;
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo, edgeWeight);
      if (!this.isDirected) {
        vertexTwo.addEdge(vertexOne, edgeWeight);
      }
      return;
    }
    throw new Error('One or more of the inputs is not an instance of Vertex.');
  }

  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);
      if (!this.isDirected) {
        vertexTwo.removeEdge(vertexOne);
      }
      return;
    }
    throw new Error('One or more of the inputs is not an instance of Vertex.');
  }

  getVertexByValue(value) {
    return this.vertices.find(vertex => vertex.data === value);
  }

  print() {
    const vertexList = this.vertices;
    vertexList.forEach(vertex => vertex.print());
  }
}

module.exports = Graph;
