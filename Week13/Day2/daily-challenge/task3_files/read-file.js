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

export function readFilewithExtraWord(word){
    const filePath = path.join(_dirname, "file-data.txt");

    const content = fs.readFileSync(filePath, "utf-8");
    console.log(`This is the added word: ${word.toUpperCase()} - AND - This is the content: ${content}`);
}