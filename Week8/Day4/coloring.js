const board = document.querySelector(".board");

const totalCells = 2952;
for (let i=0; i<totalCells; i++){
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
};

const palette = document.querySelector(".palette");
const clearBtn = document.querySelector("#clearBoard");

let currentColor = null;
let isPainting = false;

// Choose a color event
palette.addEventListener("click", (e) => {
    const selectedColor = e.target
    if (!selectedColor.classList.contains("color")) return; // ignore if the selected is not color
    
    currentColor = getComputedStyle(selectedColor).background;
    console.log(currentColor);
});

// is it a cell?
function paintIfCell(e){
    if (!e.classList || !e.classList.contains("cell")){ // does this have a class list or have a class that contains cell?
        return; //do nothing no paint
    }
    if (!currentColor) { // if user hasnt picked a color yet
        return; //do nothing
    }
    e.style.background = currentColor // apply the chosen color to this cell
}

// Start paiting
board.addEventListener("mousedown", (e) => {
    isPainting = true;
    e.preventDefault(); // prevent text selection
    paintIfCell(e.target);
});

// Continue painting while draggin
board.addEventListener("mouseover", (e) => {
    if (!isPainting) return; // if the ispainting is not true, stop and do nothign
    paintIfCell(e.target);
});

// stop painting
window.addEventListener("mouseup", () => { //mouse btn release anywhere on the page
    isPainting = false;
});

// clear board
clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.background = "white";
    });
});










