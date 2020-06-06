function getAllNodes(grid){
    const nodes =[];
    for(const row of grid){
        for(const node of row){
            nodes.push(node);
        }
    }
    return nodes;
}
function updateUnvisitedNeighbors(node, grid){
    const unvisitedNeighbor = getUnvisitedNeighbors(node, grid);
    for (const neighbour of unvisitedNeighbor){
        neighbour.distance = node.distance+1;
        neighbour.previousNode = node;
    }
}
function getUnvisitedNeighbors(node, grid){
 const neighbour = [];
 const {col, row} = node;
    if (row > 0) neighbour.push(grid[row-1][col]);
    if (row < grid.length - 1) neighbour.push(grid[row+1][col]);
    if(col > 0) neighbour.push(grid[row][col-1]);
    if(col < grid[0].length -1) neighbour.push(grid[row][col+1]);
    return neighbour.filter(neighbour => !neighbour.isVisited);
}
function sortNodebyDistance(unvisitedNodes){
    // get ascending order
    unvisitedNodes.sort((nodeA, nodeB)=> nodeA.distance - nodeB.distance);
}
export function dijkstraAlgorithms( grid, startNode, finishNode){

  
    // let the initial node is start node
    const visitedNodeInorder= [];
    // let distance of node Y is distance from the initial node to Y
    startNode.distance = 0;
    // mark all node unvisited, 
    //create a set of all the unvisited nodes called the unvisited set
    const unvisitedNodes = getAllNodes(grid);
    while (unvisitedNodes.length !== 0){
        sortNodebyDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        if (closestNode.isWall) continue;
        if (closestNode.distance === Infinity) return visitedNodeInorder;
        closestNode.isVisited = true;
        visitedNodeInorder.push(closestNode);
        if (closestNode === finishNode) return visitedNodeInorder;

        updateUnvisitedNeighbors(closestNode, grid);

    }
    // Assign to every node a tentative distance value: 
        //- set it to zero for our initial node 
        //- to infinity for all other nodes, 
        //- set initial node as current
    // for the current node, consider all of its unvisted neighbour and calculate their tentative distances through the current node,
    //     compare the newly calculated tentative distance to the current assigned value and assign the smaller one
    // when we are done with all unvisited neighbours of current node mark the current node as visited adn remove it from the unvisited set, a visited node will never be checked again.
    // if the destination node has been marked visited or if the smallest tentative distance amonng the nodes in the unvisited set is infinity then stop, the algorithm has finished
    // Otherwise, select the unvisited node that marked with the smallest tentaive distancem set it as the new "current node", and go back to step c.
}

export function getNodeInshortestPathOrder(finishNode){
    const nodeInshortestPathOrder = [];
    let currentNode = finishNode;
    while(currentNode !== null){
        nodeInshortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }
    return nodeInshortestPathOrder;
}