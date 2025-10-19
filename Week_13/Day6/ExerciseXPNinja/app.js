import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import emojisRoute from "./routes/emojis.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use("/emojis", emojisRoute);
app.use(express.static("public"));

app.listen(port, () => console.log(`Server running on ${port}`));