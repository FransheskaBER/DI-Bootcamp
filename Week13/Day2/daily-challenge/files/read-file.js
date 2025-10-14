import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

export function readFile(){
    const filePath = path.join(_dirname, "file-data.txt");

    const content = fs.readFileSync(filePath, "utf-8");
    console.log(content);
};
// code from file-data.txt:
// HELLO!!
// MY NAME IS FRANSHESKA
// AND 
// YOU ARE WELCOME :D
// code from app.js:
// import { readFile } from "./read-file.js";
// readFile();
