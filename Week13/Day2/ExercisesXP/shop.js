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

