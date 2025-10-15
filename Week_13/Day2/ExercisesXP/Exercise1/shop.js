// FROM PRODUCTS.JS FILE:
// const products = [
//   { name: "Laptop", price: 999.99, category: "Electronics" },
//   { name: "T-Shirt", price: 19.99, category: "Clothing" },
//   { name: "Coffee Mug", price: 9.99, category: "Home" },
//   { name: "Headphones", price: 49.99, category: "Electronics" },
//   { name: "Notebook", price: 4.99, category: "Stationery" }
// ];

// module.exports = products;

const products = require('./products.js')
console.log(products);

function prodSearch(productName){
    let found = false;
    for (const product of products) {
        if (product.name === productName){
            console.log(product);
            found = true;
            break;
        }
    }
    if (!found){
        console.log("The product you are looking for is not available");
    }
}

prodSearch("Notebook");
prodSearch("Ring");
prodSearch("T-Shirt");

