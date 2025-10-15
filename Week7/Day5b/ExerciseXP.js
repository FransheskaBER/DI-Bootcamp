// Exercise XP

// 🌟 Exercise 1 : Find the numbers divisible by 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
// Bonus: Add a parameter divisor to the function.

function displayNumbersDivisible(divisor){
    let sum = 0
    for (let i=0; i<=500; i++){
        if (i%divisor===0){
            sum += i;
            console.log(i);
        }
    }
    console.log(`The total sum is: ${sum}`)
}
displayNumbersDivisible(45)





// 🌟 Exercise 2 : Shopping List
// Instructions:
// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// Bonus: If the item is in stock, decrease the item’s stock by 1

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingCart = ["banana", "orange", "apple"]

function myBill(){
    let totalPrice = 0
    for (let i = 0; i<shoppingCart.length; i++){
        if (shoppingCart[i] in stock && stock[shoppingCart[i]]>=1){
            totalPrice += prices[shoppingCart[i]];
            stock[shoppingCart[i]] = stock[shoppingCart[i]] - 1;
        }
    }
    console.log(`The total price of your shopping list is: ${totalPrice}`)
}
myBill()
console.log(stock)





// 🌟 Exercise 3 : What’s in my wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01
// 4. To illustrate:
// After you created the function, invoke it like this:
// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

function changeEnough(itemPrice, amountArray){
    let total = 0
    let coinValue = [0.25, 0.10, 0.05, 0.01]
    for (let i=0; i<amountArray.length; i++){
        total += amountArray[i] * coinValue[i];
        }
    if (total >= itemPrice){
        return true
    } else{ 
        return false
    }
}
console.log(changeEnough(0.75, [0,0,20,5]))
// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true







// 🌟 Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// 1. Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// 2. Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// 3. Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

function hotelCost(nights){
    let total = nights * 140;
    return total;
}

function planeRideCost(destination){
    if (destination == "London"){
        return 183;
    } else if (destination == "Paris"){
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost(days){
    let cost = days * 40;
    if (days > 10){
        let discount = 0.05;
        cost = cost * (1 - discount);
    }
    return cost;
}

function totalVacationCost(){
    let nights;
    do {
        nights = prompt("How many nights would you like to stay?");
    } while (nights== null || isNaN(Number(nights)));
        nights = Number(nights);
    
    let destination;
    do {
        destination = prompt("Where are you travelling to?");
    } while (destination == null || destination.trim() === "" || !isNaN(Number(destination)))

    let days;
    do {
        days = prompt("How many days do you want to rent the car?");
    } while (days == null || isNaN(Number(days)));
        days = Number(days);
    
    let hotel = hotelCost(nights);
    let plane = planeRideCost(destination);
    let car = rentalCarCost(days);

    console.log(`Here are the details for your holiday:\nThe hotel for ${nights} nights cost: $${hotel}\nThe plane ticket to ${destination} cost: $${plane}\nThe car rental for ${days} days cost: $${car}`)
    console.log(`The total cost is: $${hotel + plane + car}`)
}
// totalVacationCost()



// // 🌟 Exercise 5 : Users
// // Instructions
// // Retrieve the div and console.log it
// console.log(document.getElementById("container"));

// // Change the name “Pete” to “Richard”.
// let list = document.querySelectorAll("ul")[0];
// let nameValue = list.querySelectorAll("li")[1];
// nameValue.textContent = "Richard"
// console.log(nameValue);

// // Delete the second <li> of the second <ul>.
// let list2 = document.querySelectorAll("ul")[1];
// let item = list2.querySelectorAll("li")[1];
// list2.removeChild(item)

// // Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
// let items = document.querySelectorAll(".list")
// items.forEach(list =>{
//     let firstLi = list.querySelector("li");
//     firstLi.textContent = "Fransheska";
// });

// // Add a class called student_list to both of the <ul>'s.
// items.forEach(list =>{
//     list.classList.add("student_list");
// })

// // Add the classes university and attendance to the first <ul>.
// list.classList.add("university", "attendance");

// // Add a “light blue” background color and some padding to the <div>.
// // Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
// let itemDiv = document.querySelector("#container");
// let user1 = "John";
// let user2 = "Mary";
// itemDiv.style.cssText = "background-color: lightblue; padding: 10px";
// itemDiv.textContent = `Users: ${user1} and ${user2}`;
// if (itemDiv.style.backgroundColor === "lightblue"){
//     alert(`Hello ${user1} and ${user2}`)
// }

// // Do not display the <li> that contains the text node “Dan”. (the last <li> of the second <ul>)
// let lastitem = list2.lastElementChild
// lastitem.style.display = "none";

// // Add a border to the <li> that contains the text node “Richard”. (the second <li> of the first <ul>)
// let firstItem = list.querySelector("li");
// firstItem.style.border = "1px solid black";

// // Change the font size of the whole body.
// let content = document.querySelector("body");
// content.style.fontSize = 30;





// 🌟 Exercise 6 : Change the navbar
// Instructions

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let itemDiv = document.querySelector("#navBar");
itemDiv.setAttribute("id", "socialNetworkNavigation");

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
let itemUl = document.querySelector("ul");
let newLi = document.createElement("li");
let text = document.createTextNode("Logout");
newLi.appendChild(text);
itemUl.appendChild(newLi);


// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
let firstChild = itemUl.firstElementChild;
let lastChild = itemUl.lastElementChild;
console.log(firstChild.textContent)
console.log(lastChild.textContent)





// 🌟 Exercise 7 : My Book List
// Instructions
// The point of this challenge is to display a list of two books on your browser.
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

let allBooks = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    alreadyRead: false
  }
];

allBooks.forEach(book =>{
    let bookDiv = document.createElement("div");
    let text = document.createTextNode(`${book.title} by ${book.author}`);
    let img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";

    bookDiv.appendChild(text);
    bookDiv.appendChild(img);

    if (book.alreadyRead){
        bookDiv.style.color = "red";
    }
    document.querySelector(".listBooks").appendChild(bookDiv);
});


