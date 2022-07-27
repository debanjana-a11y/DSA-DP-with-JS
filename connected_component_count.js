const explore = (graph, node, visited) => {
    if (visited.includes(String(node)) === true) {
      return 0;
    }
    
    visited.push(String(node));
    
    for(let neighbor of graph[node]) {
      explore(graph, neighbor, visited);
    }
    
    return 1;
  }
  
  const connectedComponentsCount = (graph) => {
    let count = 0;
    let visited = []
    for(let node in graph) {
      count += explore(graph, node, visited);
    }
    return count;
  };
  
  console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  })); // -> 2