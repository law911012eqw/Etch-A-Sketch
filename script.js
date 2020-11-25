'use script'
//DOM elements
const gridContainer = document.getElementById('grid-container');
gridContainer.setAttribute('style', 'display: flex; flex-wrap: wrap; width: 50%; height: 70vh; margin: 0 auto;');

/* generates and organizes box of div grids */
function createGridBoxes(gridContainer) {
    let maxRows = 16;
    let maxColumns = 16;
    let gridPer = Math.round(100/maxRows) + "%"; //percentage variable
    for (let i = 0; i < maxColumns; i++) {
        for (let ii = 0; ii < maxRows; ii++) {
            const grid = document.createElement('div');
            grid.className = "sketch_grid"; 
            grid.setAttribute('style', 'flex: 1; border: 1px solid #000'); //sets the style attribute
            gridContainer.appendChild(grid);
        }
    }
    const sketchGrids = document.querySelectorAll('.sketch_grid');
    sketchGrids.forEach(element => element.style.flexBasis = gridPer); //It sets the number of grids relatively to the value of desired rows and columns
}
createGridBoxes(gridContainer); //creates the 16x16 grid
const sketchGrids = Array.from(document.querySelectorAll('.sketch_grid'));

//apply a background color
function hoverEffect(){
    this.style.background = "black";
}
sketchGrids.forEach(element => element.addEventListener("mouseover", hoverEffect)); //hover effect