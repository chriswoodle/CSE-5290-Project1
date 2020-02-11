const { PriorityQueue } = require('./priority-queue');

class Dijkstra {
    graph; // Graph
    start; // Node
    end;   //Node

    map = {};

    visited = [];
    distance = {}
    pq = new PriorityQueue();

    constructor(graph, start, end) {
        this.graph = graph;
        this.start = start;
        this.end = end;
        this.pq.enqueue(start, 0)
        this.distance[start.name] = 0;
    }

    search() {
        console.log('Dijkstra');
        while (!this.pq.isEmpty()) {
            const v = this.pq.dequeue();
            if (v == this.end) {
                console.log('Found, total distance: ', this.distance[v.name]);
                break;
            }

            console.log('At:', v.name)

            this.graph.adjecentEdges(v).forEach(link => {
                const w = link.getOtherNode(v);
                const weight = link.weight;


                this.distance[w.name] = this.distance[w.name] || 0;
                this.distance[v.name] = this.distance[v.name] || 0;

                //  If there is shorted path to w through v. 
                if (!this.distance[w.name] || this.distance[w.name] > this.distance[v.name] + weight) {
                    // Updating distance of w 
                    this.distance[w.name] = this.distance[v.name] + weight;
                    this.map[w.name] = v;
                    this.pq.enqueue(w, this.distance[w.name]);
                }
            });
        }

        // Construct path from parent hashmap
        const path = [];
        let n = this.end;
        while (n != undefined) {
            path.push(n);
            if(n == this.start) break;
            n = this.map[n.name];
        }
        return path;
    }
}

module.exports = {
    Dijkstra
}