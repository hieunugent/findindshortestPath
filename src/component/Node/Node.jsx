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
    } = node;
    const [extraClassName, setExtraClassName] = useState('node');
    const [isReadyWall, setwall ]= useState(false);
    const [newNode, setNode] = useState(node);
    const [isMousePressed, setmousePress] = useState(false);
    // console.log('in node main handle down the wall', isWall);
    function handleClick(){
      console.log("click");
    }
      // function onMouseDown() {
      //   node.onMouseDown(node.row, node.col);
      //   // set out put for each node when hit the wall
      //   setExtraClassName(() => !isReadyWall ? 'node node-wall' : 'node');
      //   setwall(!isReadyWall);
      // }
    function handleMouseDown(){
        console.log("start down node");
        
        console.log("mouse is Down on" , row , col);
         // console.log('in node handle down the wall', node.isWall, " of row", row, "col", col);
        //set out put for each node when hit the wall
        setExtraClassName(() => !isReadyWall ? 'node node-wall' : 'node');
        setwall(!isReadyWall);

       
        
        
        setNode((preValue)=>{ 
        return  { ...preValue,
          isWall: !preValue.isWall};
        });
      setmousePress(!isMousePressed);
        node = newNode;
        node.onMouseDown(row, col); 
        console.log('continue node down');

    // end here
        console.log(node);
        // console.log(extraClassName);
        // because the state of node is not update yet so to make consitency we reverse the iswall result
        console.log('in node handle down the wall', !node.isWall ," of row", row, "col", col);  
        console.log('end node down');
        
    }
    function onMouseUp(){
       setmousePress(!isMousePressed);
        node.onMouseUp();
        console.log('mouse release in node', row, col);
    }
    
    function onMouseEnter(){
          console.log("start node enter");
          node.onMouseEnter(row, col);
          console.log('mouse enter in node', row, col);
          setExtraClassName('');
    
         // node.onMouseEnter(row, col);
          console.log("press on process");     
          console.log('end node enter');
          
    }
   
    return (
      <div

        id={'node'}
        className={
          isStart
            ? "node node-start"
            : isFinish
            ? "node node-finish"
            : isWall
            ? "node node-wall":extraClassName
        }
        onMouseDown={handleMouseDown}
        onMouseUp={onMouseUp}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}

      ></div>
    );
}

export default Node;