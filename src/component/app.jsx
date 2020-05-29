import React, { useState, Component } from "react";
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
        isWall:  row===10 && col===20,
    };
};


function App(props){
   
   const grid = getInitialGrid();
   function handleMouseDown(node){
        const asNode = grid[node.row][node.col];
        const newNode = {
            ...asNode, 
            isWall : !asNode.isWall,
        }
        grid[node.row][node.col]= newNode;   
        console.log( newNode);
       // props.onUpdateGrid(newNode)
   }
   return (<div className="grid"  >
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
                                    // mouseIsPressed={mouseIsPressed}
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

