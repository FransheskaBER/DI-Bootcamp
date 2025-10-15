// CommonJS syntax:
// const http = require("http");

// ES Modules (ESM):
import http from "http";

// const server = http.createServer((req, res) => {
//     // send response
//     res.end("Hello World from the server");
// });

// server.listen(5000, "localhost", () => {
//     console.log("Server is listening at localhost on port 5000");
// });

// const server2 = http.createServer((req, res) => {
//     if (req.url === "/"){
//         res.end("Home Page");
//     } else if (req.url === "/about"){
//         res.end("About Page");
//     } else {

//         // TO ADD A HEADER TO THE RESPONSE, ADD A FUNCTION BEFORE res.end()
//         res.writeHead(404, {
//             "Content-type": "text/html"
//         })

//         res.end("Page not found");
//     }
// });
// server2.listen(9000, "localhost", () => {
//     console.log("Server is listening at localhost on port 9000");
// });

// // req > get info about the current HTTP request
// // res > send info(a response) for the current HTTP request
// const server3 = http.createServer((req, res) => {
//     // 1
//     res.statusCode = 200;
//     // 2
//     res.setHeader("Content-Type", "text/html");
//     // 3
//     res.end("Hello World");
// });
// server3.listen(5000);
// console.log("Node.js web server at port 5000 is running...");


// // Send info (a response) in JSON format:
// const server4 = http.createServer((req, res) => {
//     if (req.url === "/welcome"){
        
//         // inform the client that we send a JSON response in the header with the appropriate content type.
//         res.setHeader("Content-Type", "application/json");
//         res.writeHead(200);
//         res.end(JSON.stringify({
//             message: "Welcome new user"
//         }));
//     } else {
//         res.end("Another page");
//     }
// });
// server4.listen(5000);
// console.log("Node.js web server at port 5000 is running...");

const json =
{
    "menu": {
        "firstCourse": "Vegetable Soup",
        "mainCourse": "Hamburger",
        "dessert": "Fruit salad"
    }
}

import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json(json);
});

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000");
});




