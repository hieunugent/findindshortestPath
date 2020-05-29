import React, { useState } from "react";
import "./Node.css";
import { render } from "@testing-library/react";


function Node(node){
    const {
      row,
      col,
      isStart,
      isFinish,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
    } = node;
    const [extraClassName, setExtraClassName] = useState('node');
   
    function handleMouseDown(){
        node.onMouseDown(node);   
        setExtraClassName('node node-wall');      
    }
    function handleMouseUp(){
        node.onMouseUp();
    }
    function handleMouseEnter(node){
        setExtraClassName("node node-wall"); 
    }
    return (
      <div
        id={"node"}
        className={
          isStart
            ? "node node-start"
            : isFinish
            ? "node node-finish"
            : extraClassName
        }
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
      ></div>
    );
}

export default Node;