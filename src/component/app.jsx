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
        isWall:  false,
    };
};

const createWall=(grid, row, col)=> {
    const newGrid = grid.slice();
    const asNode = newGrid[row][col];
    const newNode = {
      ...asNode,
        isWall: !asNode.isWall,
     
    };  
    newGrid[row][col] = newNode;
    return newGrid[row][col];
 
};
 
// const removeWall = (grid, row, col) => {
//     const newGrid = grid.slice();
//     const asNode = newGrid[row][col];
//     const newNode = {
//         ...asNode,
//         isWall: false,
       
//     };
//     newGrid[row][col] = newNode;
//     return newGrid[row][col];
// }
function App(){
   console.log('start app');
   
   const grid = getInitialGrid();
   const [mouseIsPressed, setmousePress] = useState(false);
   console.log("current mouse press in main  app", mouseIsPressed);
   console.log("current mosue is release in main app", !mouseIsPressed);
   
    function onMouseDown(row, col){
        console.log('start down app');
        grid[row][col] = createWall(grid, row, col);  
        setmousePress(!mouseIsPressed);  
       // console.log('mousepressed app handleMouseDown true when press otherwise',mouseIsPressed );
        console.log("main app wall need to be true when marked, otherwise false", grid[row][col].isWall);  
        console.log('end down app');
        

   }
   function handleMouseup(){
       console.log('start up app');
       
       setmousePress(!mouseIsPressed);  
       console.log('mouse is released', mouseIsPressed);   
       console.log('end up app');
       
   }
//    function handleMouseEnter(){
//        console.log(mouseIsPressed);
//        console.log('mouse is press');

//        if(mouseIsPressed)return;
//       // grid[node.row][node.col] = createWall(grid, node.row, node.col);     
   
//    }
   return (<div className="grid"  >
             {grid.map((row, rowIdx)=> {
                 return (
                    <div key={rowIdx}>
                        {row.map((node, nodeIdx)=> {
                            const {
                              row,
                              col,
                              isFinish,
                              isStart,
                              isWall,  
                            } = node;
                            return (
                                <Node
                                    key={nodeIdx}
                                    isStart= {isStart}
                                    isFinish={isFinish}
                                    isWall={isWall}
                                    row={row}
                                    col={col}
                                    onMouseDown={onMouseDown}
                                    onMouseUp={handleMouseup}
                                    // onMouseEnter={handleMouseEnter}
                                    mouseIsPressed={mouseIsPressed}
                                     

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

