class Node {
    name;
    constructor(name) {
        this.name = name;
    }
}

class Link {
    to;
    from;
    weight;
    constructor(to, from, weight, undirected = true) {
        this.to = to;
        this.from = from;
        this.weight = weight;
        this.undirected = undirected;
    }

    getOtherNode(v) {
        if(this.to == v) {
            return this.from;
        } else {
            return this.to;
        }
    }
}

class Graph {
    nodes = [];
    links = [];

    addLink(link) {
        this.links.push(link);
    }

    addNode(node) {
        this.nodes.push(node);
    }

    adjecentEdges(node) {
        return this.links.filter(link => {
            return link.to == node || (link.from == node && link.undirected)
        });
    }
}

module.exports = {
    Graph,
    Link,
    Node
}