
export function generate(grid){
    addOuterWall(grid);
    addInnerWall(true, grid, 1,47,1,17);

}
function addInnerWall(h, grid, cminx, cmaxx, minY, maxY) {
  if (h) {
    if (maxY - minY < 2) {
      return;
    }
      var y = Math.floor(randomNumber(minY, maxY) / 2) * 2;
      addHorWall(grid, cminx, cmaxx, y);
      addInnerWall(!h, grid, cminx, cmaxx, minY, y - 1);
      addInnerWall(!h, grid, cminx, cmaxx, y + 1, maxY);
  } else {
    if (cmaxx - cminx < 2) {
      return;
    }
      var x = Math.floor(randomNumber(cminx, cmaxx) / 2) * 2;
      addVerWall(grid, minY, maxY, x);
    addInnerWall(!h, grid, cminx, x - 1, minY, maxY);
    addInnerWall(!h, grid, x + 1, cmaxx, minY, maxY);
  }
}
function addOuterWall(grid){
    for (var i = 0; i< grid.length; i++){
        if(i === 0 || i === (grid.length -1)){
            for (var j = 0 ; j < grid[0].length; j++){
                grid[i][j].isWall = true;
            }
        }
        else{
            grid[i][0].isWall = true;
            grid[i][grid[0].length -1].isWall = true;
        }
    }
}



function addVerWall(grid, cmin, cmax, x){
    var hole = Math.floor(randomNumber(cmin, cmax) / 2) * 2 + 1;
    for(var i = cmin; i <= cmax; i++){
        if(i === hole)
        {
            grid[i][x].isWall = false;          
        }
        else if(grid[i][x].isStart || grid[i][x].isFinish){
            continue;
        }
        else{
            grid[i][x].isWall = true;
        } 
    }
}

function addHorWall(grid, minY, maxY, y){
    var hole = Math.floor(randomNumber(minY, maxY) / 2) * 2 + 1;
    for(var i = minY; i<= maxY; i++){
        if (i === hole) {
            grid[y][i].isWall = false;
           
        }
        else if (grid[y][i].isStart || grid[y][i].isFinish) {
          continue;
        } else grid[y][i].isWall = true;
    }

}
function randomNumber(lowBound, upBound){
    return Math.floor(Math.random()*(upBound-lowBound+1)+lowBound);
}
