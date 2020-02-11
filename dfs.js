const { Stack } = require('./stack');

class DFS {
    graph; // Graph
    start; // Node
    end;   //Node

    visited = [];
    map = {};
    s = new Stack();

    constructor(graph, start, end) {
        this.graph = graph;
        this.start = start;
        this.end = end;
        this.s.push(start)
    }

    search() {
        console.log('DFS Search');
        while (!this.s.isEmpty()) {

            const v = this.s.pop();

            if (!this.visited.includes(v)) {
                console.log('Visit:', v.name)
                if (v == this.end) {
                    console.log('Found')
                    break;
                }

                this.visited.push(v);
                this.graph.adjecentEdges(v).filter(link => {
                    // Filter out visited nodes
                    const w = link.getOtherNode(v);
                    return !this.visited.includes(w);
                }).forEach(link => {
                    const w = link.getOtherNode(v);
                    this.s.push(w);
                    this.map[w.name] = v;
                    console.log('Push:', w.name)
                });
            }
        }

        // Construct path from parent hashmap
        const path = [];
        let n = this.end;
        while (n != undefined) {
            path.push(n);
            n = this.map[n.name];
        }
        return path;
    }
}

module.exports = {
    DFS
}