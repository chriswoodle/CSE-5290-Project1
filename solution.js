const { Graph, Node, Link } = require('./graph');
const { BFS } = require('./bfs');
const { DFS } = require('./dfs');
const { Dijkstra } = require('./dijkstra');

const graph = new Graph();

const Oradea = new Node("Oradea");
const Zerind = new Node("Zerind");
const Arad = new Node("Arad");
const Timisoara = new Node("Timisoara");
const Lugoj = new Node("Lugoj");
const Mehadia = new Node("Mehadia");
const Dobreta = new Node("Dobreta");
const Caraiova = new Node("Caraiova");
const Sibiu = new Node("Sibiu");
const Fagaras = new Node("Fagaras");
const RimnicuVilcea = new Node("RimnicuVilcea");
const Pitesti = new Node("Pitesti");
const Neamt = new Node("Neamt");
const Iasi = new Node("Iasi");
const Vaslui = new Node("Vaslui");
const Urziceni = new Node("Urziceni");
const Bucharest = new Node("Bucharest");
const Hirsova = new Node("Hirsova");
const Eforie = new Node("Eforie");
const Giurgiu = new Node("Giurgiu");

graph.addNode(Oradea);
graph.addNode(Zerind);
graph.addNode(Arad);
graph.addNode(Timisoara);
graph.addNode(Lugoj);
graph.addNode(Mehadia);
graph.addNode(Dobreta);
graph.addNode(Caraiova);
graph.addNode(Sibiu);
graph.addNode(Sibiu);
graph.addNode(Fagaras);
graph.addNode(RimnicuVilcea);
graph.addNode(Pitesti);
graph.addNode(Neamt);
graph.addNode(Iasi);
graph.addNode(Vaslui);
graph.addNode(Urziceni);
graph.addNode(Bucharest);
graph.addNode(Hirsova);
graph.addNode(Eforie);
graph.addNode(Giurgiu);

// Undirected
graph.addLink(new Link(Oradea, Zerind, 71));
graph.addLink(new Link(Oradea, Sibiu, 151));
graph.addLink(new Link(Zerind, Arad, 75));
graph.addLink(new Link(Arad, Timisoara, 118));
graph.addLink(new Link(Arad, Sibiu, 140));
graph.addLink(new Link(Timisoara, Lugoj, 111));
graph.addLink(new Link(Lugoj, Mehadia, 70));
graph.addLink(new Link(Mehadia, Dobreta, 75));
graph.addLink(new Link(Dobreta, Caraiova, 120));
graph.addLink(new Link(Caraiova, RimnicuVilcea, 146));
graph.addLink(new Link(Caraiova, Pitesti, 138));
graph.addLink(new Link(Sibiu, Fagaras, 99));
graph.addLink(new Link(Sibiu, RimnicuVilcea, 80));
graph.addLink(new Link(RimnicuVilcea, Pitesti, 97));
graph.addLink(new Link(Pitesti, Bucharest, 101));
graph.addLink(new Link(Bucharest, Fagaras, 211));
graph.addLink(new Link(Bucharest, Giurgiu, 90));
graph.addLink(new Link(Bucharest, Urziceni, 85));
graph.addLink(new Link(Urziceni, Vaslui, 142));
graph.addLink(new Link(Vaslui, Iasi, 92));
graph.addLink(new Link(Iasi, Neamt, 87));
graph.addLink(new Link(Urziceni, Hirsova, 98));
graph.addLink(new Link(Hirsova, Eforie, 86));


const bfs = new BFS(graph, Bucharest, Timisoara);
const bfsPath = bfs.search();
console.log(bfsPath);


const dfs = new DFS(graph, Bucharest, Timisoara);
const dfsPath = dfs.search();
console.log(dfsPath);


const dijkstra = new Dijkstra(graph, Bucharest, Timisoara);
const dijkstraPath = dijkstra.search();
console.log(dijkstraPath);

