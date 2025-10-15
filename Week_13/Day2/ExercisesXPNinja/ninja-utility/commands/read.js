import fs from "fs";

export function fileReading(filePath){
    const content = fs.readFileSync(filePath, "utf-8"); // read as text
    console.log(content);
}





