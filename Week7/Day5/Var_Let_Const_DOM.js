//-------------------------
//  VAR, LET, CONST
// ------------------------

// CONST > once you assigned a value to a variable, then you cannot change that value. you can reassigned values to variables created by LET and VAR only.
// LET vs VAR > use instead of VAR to create variables

// You cannot access them outside of a function, so if you create a function and inside the funciton you create a variable with either of those 3, you will
// get an undefined error if you want to access that variable or its value outside the function.

// if you use CONST or LET to create a variable inside a function or code block, you won't be able to print it outside that code block. If you want to create a variable
// and access it outside that code scope, then use VAR. See example below:
function listFruits () {
    if(true) {
        const fruit1 = "orange"; //it exists in block scope
        let fruit2 = "avocado"; //it exists in block scope
        var fruit3 = "banana"; // it exists in function scope
    }

    // console.log(fruit1); GET AN ERROR
    // console.log(fruit2); GET AN ERROR
    // console.log(fruit3); WILL PRINT "BANANA"
}

// listFruits(); PRINTS "BANANA"


// ------------------------
// LET KEYWORD
// ------------------------
let mango = "yellow"
if (mango === "yellow"){
  let mango = "blue"
  console.log(mango) //   overwrite the mango value but only inside the function so prints BLUE inside the function but not outside
}
console.log(mango) // prints YELLOW

var kiwi = "yellow"
if (kiwi === "yellow"){
  var kiwi = "blue"
  console.log(kiwi) //  overwrite the original value inside and outside the function so it prints BLUE
}
console.log(kiwi) // prints BLUE




// ------------------------
// DOM
// ------------------------

// DOM = a tree structure of HTML elements.
// Root node → the top of the tree (in browsers, usually <html>).
// Child node → an element inside another element (e.g. <li> inside <ul>).
// Leaf node → elements at the bottom with no children (e.g. <p> with only text inside).


// Example HTML:

// <html>   <!-- root -->
//   <body>   <!-- child of <html> -->
//      <ul>   <!-- child of <body> -->
//          <li>Apple</li>   <!-- leaf (no children) -->
//          <li>Mango</li>   <!-- leaf -->
//      </ul>
//   </body>
// </html>

let items = document.querySelectorAll("li")
items[2].textContent = "Banana"; // changes the 3rd item of the list in li (Egg)