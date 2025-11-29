let gridSize = 16;
let maxGridSize = 50;

let actualGridSize = 656;

let borderSize = 1;

let gridSquareSize = actualGridSize/gridSize;

const screen = document.querySelector(".screen");
screen.style.display = "flex";
screen.style.justifyContent = "space-around";
screen.style.alignItems = "center";
screen.style.display = "flex";
screen.style.flexDirection = "column";

const buttons = document.createElement("div");
buttons.setAttribute("class", "buttons");
screen.appendChild(buttons);
buttons.style.display = "flex";
buttons.style.gap = "8px";

const customButton = document.createElement("button");
customButton.setAttribute("class", "customize");
customButton.textContent = "Customize the # of squares per side";
buttons.appendChild(customButton);

customButton.addEventListener('click', () => {
    gridSize = prompt("How many squares per side?");
    if (gridSize === 0 || gridSize === null) gridSize = 16;
    if (gridSize > maxGridSize) gridSize = maxGridSize;
    gridSquareSize = actualGridSize/gridSize;
    resetGrid();
});

const resetButton = document.createElement("button");
resetButton.setAttribute("class", "reset");
resetButton.textContent = "Reset grid";
buttons.appendChild(resetButton);

resetButton.addEventListener('click', () => {
    resetGrid();
});

const grid = document.createElement("div");

grid.style.width = `${actualGridSize}px`;
grid.style.height = `${actualGridSize}px`;
grid.style.border = "solid 2px black";

grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.overflow = "false";

screen.appendChild(grid);

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 0; i < gridSize*gridSize; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.style.boxSizing = "border-box";
        gridSquare.setAttribute("class", "gridSquare");
        grid.appendChild(gridSquare);
        gridSquare.style.width = `${gridSquareSize}px`;
        gridSquare.style.height = `${gridSquareSize}px`;
        gridSquare.style.border = `solid ${borderSize}px black`;
        gridSquare.style.backgroundColor = `#ffffff`;
    }

    let gridSquares = document.querySelectorAll(".gridSquare");
    gridSquares.forEach((gridSquare) => {
        let gridColor = gridSquare.style.backgroundColor;

        gridSquare.addEventListener('mouseenter', () => {
            gridColor = 'black';
            gridSquare.style.backgroundColor = `${gridColor}`;
        });
    });
}

resetGrid();

