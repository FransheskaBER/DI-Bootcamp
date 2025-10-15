import express from "express";

const app = express();

// the app.listen() will create an HTTP server and read incoming requests on a defined port, in this case port 5000
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})

// The app.get() defines a URL path that will return a resource, in this case a JSON product array.
// syntax:
// app.METHOD(PATH, HANDLER)
app.get("/api/products", (req, res) => {
    res.json([
        {name: "iPhone", price: 800},
        {name: "iPad", price: 6500},
        {name: "iWatch", price: 750}
    ])
});

app.get("/", (req, res) => {
    res.send("Hello, I'm the HOME PAGE")
})
app.get("/aboutme", (req, res) => {
    res.send("I love conding! welcome I am the ABOUT ME PAGE")
})
app.get("/tutorial", (req, res) => {
    res.send("I am the TUTORIAL page!")
})
