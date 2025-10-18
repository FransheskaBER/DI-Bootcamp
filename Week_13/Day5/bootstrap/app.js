import express from "express";
import { expr } from "jquery";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

app.use(express.json());
app.use("/css", express.static(path.join(__dirname, "node/modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_module/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
