import express from "express";
import game from "./routes/game.js";
import cookieParser from "cookie-parser";


const app = express();
const port = 5000;

app.use(express.json());
app.use(cookieParser());
app.use("/quiz", game);
app.use(express.static("public"));

// cookie parse:
// Middleware cookieParse in this file ensure every request has a playerId cookie and a session.
// If the cookie doesn’t exist, create one, initialize { score: 0, index: 0 }, and set the cookie.
// If it exists, load that session object.

app.listen(port, () => console.log(`Server running on port ${port}`));

