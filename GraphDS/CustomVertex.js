const Edge = require("./CustomEdge.js");

class Vertex {
    constructor(data) {
        this.data = data;
        this.edges = [];
    }

    addEdge(vertex, weight) {
        if (vertex instanceof Vertex) {
            return this.edges.push(new Edge(this, vertex, weight));
        }
        throw new Error("This is not an instance of Vertex");
    }

    removeEdge(vertex) {
        return this.edges = this.edges.filter(edge => edge.end !== vertex);
    }
    
    print() {
        const edgeList = this.edges.map(edge =>
            edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data);

        const output = `${this.data} --> ${edgeList.join(', ')}`;
        console.log(output);
    }
}

module.exports = Vertex;