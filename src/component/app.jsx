import React, {useState} from "react";
import Node from "./Node/Node";





function App(){
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
   return (<div>
              <Node/>
             </div>
            
        
    )
}
export default App;

