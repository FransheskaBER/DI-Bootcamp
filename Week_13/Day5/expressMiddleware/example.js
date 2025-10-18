import express from "express";

const app = express();

// custom middleware:
function logger(req, res, next){
    console.log(`${req.method} ${req.url}`); // `GET /`
    next(); // continue to the next handler
}

// use the middleware
app.use(logger);

// route:
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => console.log("server listening on port 3000"));

// Flow:

// You visit /
// Express runs logger() → prints “GET /”
// next() tells Express: “ok, continue to the next step”
// Then Express runs the route handler → res.send("Hello World!")
// If next() wasn’t called, you’d never reach the route — the request would hang forever