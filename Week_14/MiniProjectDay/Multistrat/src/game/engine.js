// CREATE A 10X10 GRID/BOARD filled with dots (.)
export function createGrid(size=10){
    const grid = [];
    for (let row = 0; row < size; row++){
        const line = [];
        for (let col = 0; col < size; col++){
            line.push(".");
        }
        grid.push(line);
    }
    return grid;
}


// this function returns the new position after moving one step in the given direction:
export function calculateNewPosition([row, col], direction){
    //map a direction to a row/col delta (change)
    const deltas = {
        up: [-1, 0],
        down: [1, 0],
        left: [0, -1],
        right: [0, 1],
    };
    const delta = deltas[direction];
    if (!delta) return null;
    return [row + delta[0], col + delta[1]]; // new row and col
}

// check if position is inside the board:
export function inBounds([row, col], size=10){
    return row >= 0 && row < size && col >= 0 && col < size; // true only if inside the grid 10x10
}

function randInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// place obstacles X on empty cells, avoiding reserved positions
export function placeObstacles(grid, count, reserved = []){
    const size = grid.length;
    const reservedSet = new Set(reserved.map(([row, col]) => `${row},${col}`));
    let placed = 0; // how many X we have put
    const maxTries = count * 50; // safety to avoid infinite loop
    let tries = 0;

    while (placed < count && tries < maxTries){
        tries++;
        const row = randInt(0, size - 1); // random row
        const col = randInt(0, size -1);
        const key = `${row},${col}`;

        if (reservedSet.has(key)) continue; // skil bases or reserved cells
        if (grid[row][col] !== ".") continue; // only place on empty cells

        grid[row][col] = "X";
        placed++
    }
}