const graphs = {
    a : ['b', 'c'],
    b : ['d'],
    c : ['e'],
    d : ['f'],
    e : [],
    f : []
};

const depthFirstTraversal = (graphs, node) => {
    const stack = [node];

    while(stack.length > 0) {
        let current = stack.pop();
        console.log(current);
        for (let neighbor of graphs[current]) {
            stack.push(neighbor);
        }
    }
};


depthFirstTraversal(graphs, 'a'); // acebdf

const breadthFirstTraversal = (graphs, node) => {
    const queue = [node];

    while(queue.length > 0) {
        let current = queue.shift();
        console.log(current);
        for (let neighbor of graphs[current]) {
            queue.push(neighbor);
        }
    }
};


breadthFirstTraversal(graphs, 'a'); // abcdef