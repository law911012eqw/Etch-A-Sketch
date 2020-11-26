'use script'

//global variables
let numRows = 16;
let numCols = 16;

//DOM elements
const btnClear = document.getElementById('btnClear');
const gridNum = document.getElementById('gridByGrid');
const minGrid = document.getElementById('numRow').min;
const maxGrid = document.getElementById('numRow').max;
/* generates and organizes box of div grids */
function createGrids(maxR, maxC) {
    if (document.body.contains(document.getElementById('grid-container'))) {
        removeGrids();
    }
    const gridContainer = document.createElement('div');
    gridContainer.id = 'grid-container';
    gridContainer.setAttribute('style', 'display: flex; flex-wrap: wrap; width: 768px; height: 768px; border: 1px solid #000; margin: 0 auto;');
    document.body.append(gridContainer);

    let gridPer = 100 / maxR + "%"; //percentage variable
        for (let i = 0; i < (product = maxR * maxC); i++) {
            const grid = document.createElement('div');
            grid.className = "sketch_grid";
            grid.setAttribute('style', 'flex: 1; background: #fff;'); //sets the style attribute
            gridContainer.appendChild(grid);
        }

    const sketchGrids = document.querySelectorAll('.sketch_grid');
    sketchGrids.forEach(el => el.style.flexBasis = gridPer); //It sets the number of grids relatively to the value of desired rows and columns
}
//remove the sketchpad
function removeGrids() {
    const gridContainer = document.getElementById('grid-container');
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
    document.getElementById('grid-container').remove();
}
//apply a background color
function fillColors() {
    const sketchGrids = Array.from(document.querySelectorAll('.sketch_grid'));
    sketchGrids.forEach(element => element.addEventListener("mouseenter", (generateColor)));
}

function generateColor(){
    this.style.background = "black";
}
//resets the color back to normal 
function btnClick(){
    const sketchGrids = document.querySelectorAll('.sketch_grid');
    btnClear.onclick = () => sketchGrids.forEach(el => el.style.background = '#fff');
}

//Checks if both grid by grid input is empty and within the acceptable 
//then creates a new sets of grid relatively sized based on input entered by user
gridNum.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        numRows = document.getElementById('numRow').value;
        numCols = document.getElementById('numCol').value;
        if ((+numRows >= +minGrid && +numRows <= +maxGrid) && (+numCols >= +minGrid && +numCols <= +maxGrid)) {
            createGrids(numRows, numCols);
        }
    }
});

document.addEventListener('DOMContentLoaded', createGrids(numRows, numCols)); 
fillColors();
btnClick();