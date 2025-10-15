// Exercise 1 : File Management and Path Manipulation
// Instructions
// Create a directory named file-management.
// Inside the file-management directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// Create a directory named data inside the file-management directory.
// Inside the data directory, create a file named example.txt and add some content to it.
// Create a file named file-info.js inside the file-management directory.

import path from "path";
import fs from "fs";

// with type:module, node doesnt give me _dirname by default so i need to create it:
import { fileURLToPath } from "url";

const currentFileInfo = fileURLToPath(import.meta.url); // gives the full path of this file "file-info.js"
const currentFolder = path.dirname(currentFileInfo); // gives the directory containing this file


// In file-info.js, require the path and fs modules and implement the following functionality:
// Use the path.join function to create a file path to the example.txt file within the data directory.
const filePath = path.join(currentFolder, "data", "example.txt");

// Use the fs.existsSync function to check if the file exists.
// Use the fs.statSync function to get information about the file, such as size and creation time.
// Display the file’s existence, size, and creation time in the terminal.
export function showFileInfo(){
    if (fs.existsSync(filePath)){
        console.log("File exists!");

        const fileStats = fs.statSync(filePath);
        console.log("File info:");
        console.log("Size (in bytes): ", fileStats.size);
        console.log("Created at: ", fileStats.birthtime);
    } else {
        console.log("File doesn't exist");
    }
}
