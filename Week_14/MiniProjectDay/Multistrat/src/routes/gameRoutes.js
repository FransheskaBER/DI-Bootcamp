import { Router } from "express";
import { createGame, getGame, makeMove } from "../game/store.js";

const router = Router();

router.post('/games', (req, res) => {
    const game = createGame();
    res.status(201).json(game);
});

router.get('/games/:id', (req, res) => {
    const game = getGame(req.params.id);
    if (!game) return res.status(404).json({ error: "Game not found" });
    return res.status(200).json(game);
});

// POST { player: "p1", direction: "up" }
router.post('/games/:id/move', (req, res) => {
    try{
        const { player, direction } = req.body;
        const gameId = req.params.id;
        const updated = makeMove(gameId, player, direction);
        res.status(200).json(updated);
    } catch(err){
        if (err.name === "BadRequest") return res.status(400).json({ error: err.message});
        if (err.name === "NotFound") return res.status(404).json({ error: err.message });
        return res.status(500).json({ error: "Server error" });
    }
});

export default router;

