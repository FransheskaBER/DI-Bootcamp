import express from "express";
const app = express();

// Tell Express to use EJS for rendering views:
// set the view engine to ejs
// sets EJS as the view engine for the Express application
app.set("view engine", "ejs");

let menu = [
    {
        name: "Margarita",
        price: 10,
        ingredients: ["Tomato Sauce", "Mozzarella", "Basil"]
    },
    {
        name: "Bianca",
        price: 13,
        ingredients: ["Ricotta", "Mozzarella", "Garlic"]
    },
    {
        name: "Etna",
        price: 14,
        ingredients: ["Tomato sauce", "Mozzarella", "Anchovies", "Capers", "Olives"]
    }
];

// Define a route that renders your template
app.get("/", (req, res) => {
// res.render("File to be view", {object}, functions)
    res.render("index", { restaurantName: "Papa Pizza", pizzaMenu: menu }); // looks for index.ejs in the "views" folder
});

// NEW ROUTE
app.get("/about", (req, res) => {
    res.render("about")
});

app.listen(5000, () => console.log("server running on port 5000"));

