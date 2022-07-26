const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
const convertTograph = (edges) => {
    const graph = [];

    for(let edge of edges) {
        const [a, b] = edge;
        if ((a in graph) === false) {
            graph[a] = [];
        }
        if ((b in graph) === false) {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const graph = convertTograph(edges);

const undirectedPath = (graph, src, dst, memo = []) => {
    if (src === dst) return true;
    if (memo.includes(src) === true) return false;

    memo.push(src);
    for(let neighbor of graph[src]) {
        if (true === undirectedPath(graph, neighbor, dst, memo)) {
            return true;
        }
    }
    return false;
};

console.log(undirectedPath(graph, 'j', 'm')); // -> true