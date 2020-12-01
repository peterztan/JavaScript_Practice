const Edge = require("./CustomEdge.js");

class Vertex {
    constructor(data) {
        this.data = data;
        this.edges = [];
    }

    addEdge(vertex, weight) {
        if (vertex instanceof Vertex) {
            this.edges.push(new Edge(this, vertex, weight));
            return;
        }
        throw new Error("This is not an instance of Vertex");
    }

    removeEdge(vertex) {
        this.edges = this.edges.filter(edge => edge.end !== vertex);
    }
    
    print() {
        const edgeList = this.edges.map(edge =>
            edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data);

        const output = `${this.data} --> ${edgeList.join(', ')}`;
        console.log(output);
    }
}

module.exports = Vertex;