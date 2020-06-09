
export function generate(grid,  numDoors){
    addOuterWall(grid);

}
function addOuterWall(grid){
    for (var i = 0; i< grid.length; i++){
        if(i === 0 || i=== (grid.length -1)){
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