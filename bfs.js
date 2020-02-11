const { Queue } = require('./queue');

class BFS {
    graph; // Graph
    start; // Node
    end;   //Node

    visited = [];
    q = new Queue();

    constructor(graph, start, end) {
        this.graph = graph;
        this.start = start;
        this.end = end;
        this.visited.push(start);
        this.q.enqueue(start)
    }

    search() {
        console.log('BFS Search');
        while (!this.q.isEmpty()) {

            const v = this.q.dequeue();
            if (v == this.end) {
                console.log('Found')
                break;
            }

            console.log('At:', v.name)

            this.graph.adjecentEdges(v).forEach(link => {
                const w = link.getOtherNode(v);
                if (!this.visited.includes(w)) {
                    this.visited.push(w);
                    this.q.enqueue(w);
                    console.log('Visit:', w.name)
                }
            });
        }
        return this.q.items;
    }
}

module.exports = {
    BFS
}