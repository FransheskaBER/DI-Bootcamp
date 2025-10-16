import express from "express";
import { products } from "./data.js";

const app = express();

// app.get("/tutorial/:notion", (req, res) => {
//     console.log(req);
//     console.log("req.params: ", req.params);
//     res.send(`tutorial about ${req.params.notion}`);
// })

app.listen(2000, () => {
    console.log("Example app listening on port 2000");
})


// RETURN DATA FROM A DATABASE:
app.get("/api/products", (req, res) => {
    res.json(products);
});

// RETURN PART OF THE DATABASE (in this example everything except price):
app.get("/api/products", (req, res) => {
  const partial_products = products.map((product) => {
    return { id: product.id, name: product.name };
  });
  res.json(partial_products);
});

// RETURN ONLY 1 PRODUCT WITH A SPECIFIC ID:
app.get("/api/products/:productID", (req, res) => {
    const id = Number(req.params.productID);
    const product = products.find(product => product.id === id);
    res.json(product);
})


// QUERY STRING = RETURN ALL ITEMS THAT START WITH A SPECIFIC WORD OR LETTER/ SEARCH STH WITH FILTER OPTIONS
// SYNTAX: GET api/query/?name=phone (the query params are the actual key-valye pairs)
// Example: https://website.com/?username=John&lastname=Doe
app.get("/api/query", (req, res) => {
    const name = req.query.name.toLowerCase();
    const products_result = products.filter(product => product.name.toLowerCase().includes(name));
    if (products_result.length < 1){
        return res.status(200).send("No products matched your searched")
    }
    res.json(products_result);
});

