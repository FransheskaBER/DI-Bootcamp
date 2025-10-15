// 🌟 Exercise 1: Multiple Exports and Import using CommonJS syntax
// Instructions
// Create a file named products.js.

// Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

// Export this array using the Common JS syntax.

// Create another file named shop.js.

// In shop.js, require the product objects from the products.js module.

// Create a function that takes a product name as a parameter and searches for the corresponding product object.

// Call this function with different product names and print the details of the products.

// Run shop.js and verify that the correct product details are displayed.


const products = [
  { name: "Laptop", price: 999.99, category: "Electronics" },
  { name: "T-Shirt", price: 19.99, category: "Clothing" },
  { name: "Coffee Mug", price: 9.99, category: "Home" },
  { name: "Headphones", price: 49.99, category: "Electronics" },
  { name: "Notebook", price: 4.99, category: "Stationery" }
];

module.exports = products;

// Code in file shop.js:
// const products = require('./products.js')
// console.log(products);

// function prodSearch(productName){
//     let found = false;
//     for (const product of products) {
//         if (product.name === productName){
//             console.log(product);
//             found = true;
//             break;
//         }
//     }
//     if (!found){
//         console.log("The product you are looking for is not available");
//     }
// }

// prodSearch("Notebook");
// prodSearch("Ring");
// prodSearch("T-Shirt");

