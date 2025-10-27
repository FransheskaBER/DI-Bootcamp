import { v4 as uuidv4 } from "uuid";
import { createGrid, calculateNewPosition, inBounds, placeObstacles } from "./engine.js";

const games = {}; // in memory store

// This functions create a game object:
export function createGame(){
    const id = uuidv4();
    const grid = createGrid();

    // place bases
    grid[0][0] = "B1";// this is the base of player 1
    grid[9][9] = "B2";

    placeObstacles(grid, 12, [ [0,0], [9,9] ]); // 12 random obstacles

    const game= {
        id,
        grid,
        players: {
            p1: { name: "Player1", position: [0, 0], base: [0, 0] },
            p2: { name: "Player2", position: [9, 9], base: [9, 9] },
        },
        turn: "p1", // whose turn is it now
        winner: null
    };

    games[id] = game; //So "games" has key-value pairs: const games = { id1: gameObj1, id2: gameObj2, id3: gameObj3 };
    return game;
};


// This function fetch the game in memory
export function getGame(id){ 
    return games[id]; // this gets the entire game object
};


// make a move and update board
export function makeMove(gameId, player, direction){

    const game = games[gameId];
    
    if (!game){ const e = new Error("Game not found"); e.name = "NotFound"; throw e; }
    if (game.winner) { const e = new Error("Game already finished"); e.name = "BadRequest"; throw e; }
    if (player !== "p1" && player !== "p2"){ const e = new Error("Invalid player"); e.name = "BadRequest"; throw e; }
    if (game.turn !== player){ const e = new Error("Not your turn"); e.name = "BadRequest"; throw e; }

    const nextPos = calculateNewPosition(game.players[player].position, direction);
    
    if (!nextPos){ const e = new Error("Invalid direction"); e.name = "BadRequest"; throw e; }
    if (!inBounds(nextPos, game.grid.length)){ const e = new Error("Move out of bounds"); e.name = "BadRequest"; throw e; }
    
    // check obstacles here
    const [near_row, near_col] = nextPos;
    if (game.grid[near_row][near_col] === "X"){ const e = new Error("Move blocked by obstacle"); e.name = "NotFound"; throw e; }
    
    // apply move:
    game.players[player].position = nextPos;
    const opponent = player === "p1" ? "p2" : "p1";
    const [row, col] = nextPos;
    const [opponent_row, opponent_col] = game.players[opponent].base;
    const capturedBase = (row === opponent_row && col === opponent_col);

    if (capturedBase){
        game.winner = player;
    } else {
        game.turn = opponent;
    }

    return game;
};