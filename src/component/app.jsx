import React, { useState } from "react";
import Node from "./Node/Node";
import "./grid/grid.css";

const START_NODE_ROW = 10;
const START_NODE_COL =15;
const FINISH_NODE_ROW= 10;
const FINISH_NODE_COL = 35;


const getInitialGrid = () =>{
    const grid =[];
    for(let row = 0; row < 20; row++){
        const currentRow=[];
        for(let col = 0; col< 50; col++){
            currentRow.push(createNode(row, col));
        }
        grid.push(currentRow);
    }
    return grid;
};
const createNode= (row, col) => {
    return {
        col, 
        row,
        isStart: row===START_NODE_ROW && col===START_NODE_COL,
        isFinish: row===FINISH_NODE_ROW && col===FINISH_NODE_COL,
        isWall:false,
    };
};

const UpdateWallNode=(grid, row, col) => { 
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const updateNode={
        ...node, 
        isWall: !node.isWall,
    };
    newGrid[row][col] = updateNode;

};

function App(){
   
   const grid = getInitialGrid();
   
 

   function handleMouseDown(row, col){
   const newGrid = grid.slice();
    const node = newGrid[row][col];
    const updateNode={
        ...node, 
        isWall: !node.isWall,
    };
    newGrid[row][col] = updateNode;

    

}
   return (<div className="grid">
             {grid.map((row, rowIdx)=> {
                 return (
                    <div key={rowIdx}>
                        {row.map((node, nodeIdx)=> {
                            const {row,col, isFinish, isStart, isWall} = node;
                            return (
                                <Node
                                    key={nodeIdx}
                                    isStart= {isStart}
                                    isFinish={isFinish}
                                    isWall={isWall}
                                    row={row}
                                    col={col}
                                    onMouseDown={handleMouseDown}
                                > </Node>
                            );
                        })}
                    </div>
                 );
             })}
             
             </div>        
    )
}
export default App;

