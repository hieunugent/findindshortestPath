import React, {useState} from "react";
import Node from "./Node/Node";


const getInitialGrid = () =>{
    const grid =[];
    for(let row = 0; row < 20; row++){
        const currentRow=[];
        for(let col = 0; col< 50; col++){
            currentRow.push(createNode(col, row));
        }
        grid.push(currentRow);
    }
    return grid;
};
const createNode= (col, row) => {
    return {
        col, 
        row,
    };
};


function App(){
    const grid = getInitialGrid();
   return (<div className="grid">
             {grid.map((row, rowIdx)=> {
                 return (
                    <div  key={rowIdx}>
                        {row.map((node, nodeIdx)=> {
                            const {row, col} = node;
                            return (
                                <Node
                                    key={nodeIdx}
                                    col={col}
                                    row={row}
                                />
                            );
                        })}
                    </div>
                 );
             })}
             
             </div>        
    )
}
export default App;

