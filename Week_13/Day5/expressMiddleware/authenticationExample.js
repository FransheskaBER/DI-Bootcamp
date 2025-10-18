import express from "express";
const app = express();

function authentication(req, res, next){
    const userIsLoggedIn = false; // checking a token or cookie

    if (!userIsLoggedIn) return res.status(401).send("Unauthorized"); // stop here

    next(); // Otherwise you called the next route if logged is true
}

app.get("/dashboard", authentication, (req, res) => {
  res.send("Welcome to your dashboard!");
});