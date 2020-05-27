import React from "react";
import "./Node.css";


function Node(node){
    const{row, col, isStart, isFinish, isWall} = node;
    const extraClassName =  isStart? 'node node-start': isFinish? 'node node-finish' : isWall? 'node node-wall':'node';
    function handleMouse(){
        node.onMouseDown(row, col);
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