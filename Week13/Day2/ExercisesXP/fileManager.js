import fs from "fs";


export function readFile(path){
    return fs.readFileSync(path, "utf-8");
}

export function writeFile(path, data){
    fs.writeFileSync(path, data);
}

writeFile("helloWorld.txt", "HELLO WORLD !!");
writeFile("byeWorld.txt", "BYE WORLD !!");

