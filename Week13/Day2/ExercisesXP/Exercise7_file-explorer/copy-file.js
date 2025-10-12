import fs from "fs";

const sourceContent = fs.readFileSync("source.txt", "utf-8");
console.log("The content of the source file is:");
console.log(sourceContent);

fs.writeFileSync("destination.txt", sourceContent);
const destinationContent = fs.readFileSync("destination.txt", "utf-8");
console.log("The content of the destination file is:");
console.log(destinationContent);
