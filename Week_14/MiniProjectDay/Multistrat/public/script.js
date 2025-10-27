const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const controls = document.getElementById("controls");
const resetBtn = document.getElementById("reset");

let game = null;
let gameId = null;


// Fetch game by calling POST /api/games
async function startGame(){
    try {
        const res = await fetch("/api/games", { method: "POST" });
        const data = await res.json();
        
        if (!res.ok) {
            showToast(data.error || "Failed to start game");
            return;
        }

        game = data;
        gameId = game.id;
        boardEl.innerHTML = "";  
        renderBoard();
        updateStatus();
    } catch (err){
        showToast("Network Error");
    }
}

// send a move to POST /api/games/:id/move
async function sendMove(direction){
    if (!game || game.winner) return;
    try {
        const body = { player: game.turn, direction };
        const res = await fetch(`/api/games/${gameId}/move`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await res.json()

        if (!res.ok){
            showToast(data.error);
            return;
        }

        game = data;
        renderBoard();
        updateStatus();
    } catch(err){
        showToast("Network error");
    }
}

function renderBoard(){
    boardEl.innerHTML = "";

    // build a Set for quick check of base cells
    const b1 = posKey(game.players.p1.base); // "r, c"
    const b2 = posKey(game.players.p2.base);
    const p1 = posKey(game.players.p1.position);
    const p2 = posKey(game.players.p2.position);

    // create 100 cells (10 rows x 10 columns)
    for (let row = 0; row < game.grid.length; row++){
        for (let column = 0; column < game.grid[row].length; column++){
            const cell = document.createElement("div");
            cell.className = "cell";

            const key = `${row}, ${column}`; // this is a string form of position

            const cellVal = game.grid[row][column]; // whats on the grid of this cell?
            if (cellVal === "X"){
                cell.classList.add("obstacle");
                cell.textContent = "X";
            }

            // mark bases with background color
            if (key === b1){ cell.classList.add("base1"); cell.textContent = "B1"; }
            if (key === b2){ cell.classList.add("base2"); cell.textContent = "B2"; }

            // draw players (border highligh) and inital letter
            if (key === p1){ cell.classList.add("p1"); cell.textContent = "P1"; if (game.turn === "p1") { cell.classList.add("active"); } else { cell.classList.add("dim"); } }
            if (key === p2){ cell.classList.add("p2"); cell.textContent = "P2"; if (game.turn === "p2") { cell.classList.add("active"); } else { cell.classList.add("dim"); }}

            boardEl.appendChild(cell);
        }
    }
}

function posKey([row, column]){
    return `${row}, ${column}`;
}

function updateStatus(){
    statusEl.classList.remove("turn-p1", "turn-p2");

    if (game.winner){
        statusEl.textContent = `🏆 Winner: ${game.winner.toUpperCase()}`;
        return;
    }
    
    const turn = game.turn.toUpperCase();
    statusEl.textContent = `Turn: ${turn}`;
    statusEl.classList.add(game.turn === "p1" ? "turn-p1" : "turn-p2");
}



// wire up buttons:
controls.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const dir = btn.getAttribute("data-dir");
    if (!dir) return;
    sendMove(dir);
});


function setBusy(msg){
    statusEl.textContent = msg;
}

resetBtn.addEventListener("click", async () => {
    resetBtn.disabled = true;
    setBusy("Creating a new game...");
    await startGame();
    resetBtn.disabled = false;
});


function showToast(message){
    const toast = document.createElement("div");
    toast.textContent = message;

    Object.assign(toast.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "black",
        color: "white",
        padding: "10px 15px",
        borderRadius: "6px",
        fontSize: "14px",
        opacity: "0.9",
        zIndex: "9999",
    });

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = "opacity 0.5s";
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}

startGame();
