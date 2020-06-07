import React, { useState } from "react";
import "./Node.css";




function Node(node){
   
    //const [newNode, setNode] = useState(node);
    const {
      row,
      col,
      isStart,
      isFinish,
      isWall,
    //  isclear,
    } = node;
    const [extraClassName, setExtraClassName] = useState('node');
    const [isReadyWall, setwall ]= useState(false);
    
    function handleMouseDown(){
       
        setExtraClassName(() => !isReadyWall? 'node node-wall' : 'node');
        setwall(!isReadyWall);
       
        node = node.onMouseDown(row, col);
        
        
    }
    function onMouseUp(){
     // setmousePress(false);
      node.onMouseUp();   
     //console.log('mouse release in node', row, col);
    }
    
    function onMouseEnter(){
         
         let updatenode=node.onMouseEnter(row, col);
         if (updatenode){
           setExtraClassName(!isReadyWall?'node node-wall':'node');
           setwall(!isReadyWall);
         }  
               
    }
   
    return (
      <div
        id={`node-${row}-${col}`}
        className={
          isStart
            ? "node node-start"
            : isFinish
            ? "node node-finish"
            : isWall
            ? "node node-wall"
            // : isclear
            // ? "node"
            :extraClassName
        }
        onMouseDown={handleMouseDown}
        onMouseUp={onMouseUp}
        onMouseEnter={onMouseEnter}

      ></div>
    );
}

export default Node;
