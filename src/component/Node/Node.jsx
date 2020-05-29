import React, { useState } from "react";
import "./Node.css";


function Node(node){
    const{row, col, isStart, isFinish, isWall} = node;
    const[Wall, setWall] =useState(false);
    const extraClassName =  isStart? 'node node-start': isFinish? 'node node-finish' : isWall? 'node node-wall':'node';
    function handleMouse(){
        node.onMouseDown(node);
    }
  
    
    return (
        <div 
         id={'node'}
         className={extraClassName}
         onMouseDown={handleMouse}
        
         >
        </div>
    );
}

export default Node;