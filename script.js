'use script'
//global variables
let numRows = 16;
let numCols = 16;

//DOM elements
const btnClear = document.getElementById('btnClear');
const btnToggleGrid = document.getElementById('btnToggleGrid');
const gridNum = document.getElementById('gridByGrid');
const minGrid = document.getElementById('numRow').min;
const maxGrid = document.getElementById('numRow').max;
const gridRange = document.getElementById('gridRange');
const btnRandomRGB = document.getElementById('randomRGB');
/* generates and organizes box of div grids */
function createGrids(maxR, maxC) {
    if (document.body.contains(document.getElementById('grid-container'))) {
        removeGrids();
    }
    const gridContainer = document.createElement('div');
    gridContainer.id = 'grid-container';
    gridContainer.setAttribute('style', 'display: flex; flex-wrap: wrap; width: 750px; height: 750px; border: 1px solid #678; margin: 0 auto;');
    document.body.append(gridContainer);
    let gridPer = 100 / maxR + "%"; //percentage value for flex-basis
    for (let i = 0; i < (product = maxR * maxC); i++) {
        const grid = document.createElement('div');
        grid.className = "sketch_grid"; //adding a class to each grid
        grid.setAttribute('style', `flex: 1; background: #fff; flex-basis: ${gridPer};)`); //sets the style attribute
        document.getElementById('btnToggleGrid').textContent == 'Grid: On' ? grid.classList.toggle('gridAdd') : undefined; //generates grid inset shadow while creating grid if it is toggled on 
        gridContainer.appendChild(grid);
    }
    //const sketchGrids = document.querySelectorAll('.sketch_grid');
    //sketchGrids.forEach(el => el.style.flexBasis = gridPer); //It sets the number of grids relatively to the value of desired rows and columns
    fillColors(); //grids can be filled while it exists
    btnClick(); //buttons are functional if grid exists
}
//remove the sketchpad to overwrite a new sets of grid
function removeGrids() {
    const gridContainer = document.getElementById('grid-container');
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    document.getElementById('grid-container').remove();
}
//apply certain background color
function applyColor() {
    if (btnRandomRGB.classList.contains('btnActive')) {
        let r = randomRGB();
        this.style.background = `rgb(`+ r +',' + r + ',' + r + `)`;
    }
    else{ this.style.background = "black"; }
}
//generates random number to be used for rgb
function randomRGB(){
    let max= 255;
    let min = 0;
    let rBW = Math.floor(Math.random() * (max-min+1)+min);
    return rBW;
}
//calls the applyColor when the div is targeted with mouseenter
function fillColors() {
    const sketchGrids = document.querySelectorAll('.sketch_grid');
    sketchGrids.forEach(el => el.addEventListener("mouseenter", applyColor));
}

//button functions
function btnClick() {
    const sketchGrids = document.querySelectorAll('.sketch_grid');
    //clear grid to default color
    if (btnClear.onclick = () => {
        sketchGrids.forEach(el => el.style.background = '#fff');
    });
    //toggle grid on|off
    if (btnToggleGrid.onclick = () => {
        sketchGrids.forEach(el => {
            el.classList.toggle('gridAdd');
            if (el.classList.contains('gridAdd')) {
                btnToggleGrid.textContent = 'Grid: On';
                btnToggleGrid.classList.add('btnActive');
            }
            else {
                document.getElementById('btnToggleGrid').textContent = 'Grid: Off';
                btnToggleGrid.classList.remove('btnActive');
            }
        });
    });
    if (btnRandomRGB.onclick = () => {
        btnRandomRGB.classList.toggle('btnActive');
    });
}

//Checks if both grid by grid input is empty and within the acceptable 
//then creates a new sets of grid relatively to the input entered by user
gridNum.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        numRows = document.getElementById('numRow').value;
        numCols = document.getElementById('numCol').value;
        gridRange.value = document.getElementById('numRow').value;
        if ((+numRows >= +minGrid && +numRows <= +maxGrid) && (+numCols >= +minGrid && +numCols <= +maxGrid)) {
            createGrids(numRows, numCols);
        }
    }
});
//slider that inputs value as the x = number of grids (x by x)
gridRange.addEventListener('change', function () {
    document.getElementById('numRow').value = parseInt(this.value);
    document.getElementById('numCol').value = parseInt(this.value);
    numRows = parseInt(this.value);
    numCols = parseInt(this.value);
    createGrids(numRows, numCols);
});

document.addEventListener('DOMContentLoaded', createGrids(numRows, numCols));
