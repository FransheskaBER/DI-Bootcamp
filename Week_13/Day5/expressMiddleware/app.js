import express from "express";

const app = express();

app.use((req, res, next) => {
    console.log("hello middleware");
    next();
});

app.get("/home", (req, res) => {
    console.log("---------------In the home page----------------");
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    console.log("-----In the About Page-----");
    res.send('About Page');
});

app.listen(3000, () => console.log("server listening on port 3000"))