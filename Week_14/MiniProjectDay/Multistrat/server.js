import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import gameRoutes from "./src/routes/gameRoutes.js";

dotenv.config(); // loads the code in file .env

const app = express();

app.use(express.json());
app.use(cors()); // cors allows frontend requests
app.use("/api", gameRoutes);
app.use(express.static("public"));


app.get("/health", (req, res) => {
    res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

