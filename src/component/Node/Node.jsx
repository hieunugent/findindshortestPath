import React, { useState } from "react";
import "./Node.css";
import { render } from "@testing-library/react";


function Node(node){
    const{row, col, isStart, isFinish, isWall} = node;
    // const [extraClassName , setClassName]= useState('node');
    // setClassName(()=>{ return isStart? 'node node-start': isFinish? 'node node-finish' : isWall? 'node node-wall':'node'}); 
    const [extraClassName, setExtraClassName] = useState('node');
   
    function updateClass (node){
        const {isStart, isFinish, isWall}= node;
        setExtraClassName(()=>{
            return isStart? 'node node-start': isFinish? 'node node-finish' : isWall? 'node node-wall':'node';
        }
        ) ;
    }
    function handleMouse(){
        node.onMouseDown(node);   
        // updateClass(node);
        setExtraClassName(()=>{
            return node.isStart? 'node node-start': node.isFinish? 'node node-finish' : node.isWall? 'node node-wall':'node';
        }
        ) ; 
    }

    return (
       
        <div 
         id={'node'}
         className={'node', extraClassName}
         onMouseDown={handleMouse}
         >
        </div>
    );
}

export default Node;