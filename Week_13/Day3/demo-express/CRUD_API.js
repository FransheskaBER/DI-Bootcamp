//Create a RESTful API using Express (CRUD api)

// Create: POST /api/products
// Read all: GET /api/products
// Read: GET /api/product/1
// Update: PUT /api/products/1
// Delete: DELETE /api/products/1

// res.status(200) // Ok
// res.status(201) // Created
// res.status(204) // No content
// res.status(400) // Bad request
// res.status(401) // Unauthorized
// res.status(403) // Forbidden
// res.status(404) // Not found
// res.status(500) // Server error

import express from "express";
// import { products } from "./data.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productsPath = path.join(__dirname, "data.json");

let products = JSON.parse(await fs.readFile(productsPath, "utf-8"));


const app = express();

app.listen(7000, () => {
    console.log("Server listening on port 7000");
});

// Create: POST
// To parse json body content, do:
app.use(express.json());

app.post("/api/products", async (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
    };

    products.push(newProduct);
    
    // To update the data.json file, do:
    await fs.writeFile(productsPath, JSON.stringify(products, null, 2));
    
    res.status(201).json(newProduct);
});

// Read all: GET
app.get("/api/products", (req, res) => {
    res.json(products);
});

// Read one product: GET /api/product/1
app.get("/api/products/:productID", (req, res) => {
  const id = Number(req.params.productID);
  const product = products.find(product => product.id === id);

  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.json(product);
});


//Update: PUT /api/products/1
app.put("/api/products/:productID", async (req, res) => {
    const id = Number(req.params.productID);
    const index = products.findIndex(product => product.id === id);

    if (index === -1){
        return res.status(404).send("Product not found");
    }

    // create the updated product:
    const updateProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price,
    };

    // replace it in memory
    products[index] = updateProduct;

    // write the updated array back to data.json
    await fs.writeFile(productsPath, JSON.stringify(products, null, 2));

    res.status(200).json("Product updated");
});

//Delete: DELETE /api/products/1
app.delete("/api/products/:productID", async (req, res) => {
    const id = Number(req.params.productID);

    const index = products.findIndex(product => product.id === id);

    if (index === -1){
        return res.status(404).send("Product not found");
    }
    
    // remove it from the array
    const deletedProduct = products.splice(index, 1)[0]; // splice() returns an array of removed items, [0] extracts the single element from that array.
    
    // update data.json
    await fs.writeFile(productsPath, JSON.stringify(products, null, 2));

    res.status(200).json(deletedProduct);
});

