let gridSize = 16;
let maxGridSize = 64;

let actualGridSize = 656;

let borderSize = 2;

let gridSquareSize = actualGridSize/gridSize;

const screen = document.querySelector(".screen");
screen.style.width = "98vh";
screen.style.height = "92vh";
screen.style.display = "flex";
screen.style.justifyContent = "space-around";
screen.style.alignItems = "center";
screen.style.display = "flex";
screen.style.flexDirection = "column";

const buttons = document.createElement("div");
buttons.setAttribute("class", "buttons");
screen.appendChild(buttons);
buttons.style.display = "flex";
buttons.style.flexDirection = "row";
buttons.style.justifyContent = "center"
buttons.style.gap = "8px";

const customButton = document.createElement("button");
customButton.setAttribute("class", "customize");
customButton.textContent = "Customize the # of squares per side";
buttons.appendChild(customButton);

customButton.addEventListener('click', () => {
    gridSize = prompt("How many squares per side?");
    if ((gridSize === 0 || gridSize === "")) gridSize = 16;
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

const button = document.querySelectorAll("button");
button.forEach((b) => {
    let bs = b.style;
    bs.backgroundColor = "#8212de";
    bs.border = "none";
    bs.color = "white";
    bs.padding = "32px 32px";
    bs.fontSize = "20px";
    bs.opacity = "0.6";
    bs.transition = "0.3s";
    bs.display = "flex";
    bs.justifyContent = "center";
    bs.alignItems = "center";
    bs.textDecoration = "none";
    bs.cursor = "pointer";
    bs.width = "196px";
    bs.height = "102px";

    b.addEventListener('mouseenter', () => {
        bs.opacity = "1";
    });

    b.addEventListener('mouseleave', () => {
        bs.opacity = "0.6";
    });
});

const grid = document.createElement("div");

grid.style.width = `${actualGridSize}px`;
grid.style.height = `${actualGridSize}px`;
grid.style.border = "solid 12px #de72fc";
grid.style.borderRadius = "10px";

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

