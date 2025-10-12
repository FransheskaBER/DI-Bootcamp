import fs from "fs";

const currentDirectory = "./";

const seeAllFiles = fs.readdirSync(currentDirectory);

console.log("📂 Files in directory:");

seeAllFiles.forEach((file, index) => {
    console.log(`${index} - ${file}`)
});