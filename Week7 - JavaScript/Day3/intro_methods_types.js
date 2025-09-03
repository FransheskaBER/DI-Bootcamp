// How to add JS to you html:
// <script> write your JS code here </script>
// Example:
        // <html>
        //     <head>
        //     </head>
        //     <body>
        //         ...html code…
        //         <script>
        //         ...JS code..
        //         </script>
        //     </body>
        // </html>

// You can also create a new file for your JS code and link it to your HTML file (before the closing tag </body>), like:

// <script src="script.js"></script>

//  To declare variables, use: "let" keyword (this keyword tells the browser to create variables)
// To assign a value to variable, use "="
// example:
let x = 3

// use unique identifiers when naming variables. Names are case-sensitive. Use camelCase for names with multiple words.

// UNDEFINED = means that a variable is declared but not assigned to anything(any/no value), like:
let a 

//  you can unified strings into a paragraphs with + operator
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise, my code is unreadable.";
                
                 
//  use backlash as a break line:
let longString2 = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";

// String properties: buildt-in property "length":
let lengthTxt = longString.length 

// string methos:

//  1- indexOf()
let str = "Hello Everyone, please say hello to the class";
let posUppercaseHello = str.indexOf("Hello"); // case sensitive
let posLowercaseHello = str.indexOf("hello");
console.log(posUppercaseHello) // 0
console.log(posLowercaseHello) // 27

// 2. substring(startIndex, endIndex)
let str2 = "Hello Everyone, please say hello to the class ";
str2.substring(0,4) //returns "Hell" --> the index 4 isn't included
str2.substring(2,4) //returns "ll"
str2.substring(15) //returns "please say hello to the class"

// toLowerCase()
let myStr = "Hello Everyone, Please say hello to the class ";
myStr.toLowerCase() //returns "hello everyone, please say hello to the class "

// replace()
// concat()
// toUpperCase()
// trim()
// charAt()


// NUMBERS
// Invalid number operations
let result1 = 0 / 0;         // NaN
let result2 = Math.sqrt(-1); // NaN
let result3 = "hello" * 5;   // NaN

console.log(result1); // Output: NaN
console.log(result2); // Output: NaN
console.log(result3); // Output: NaN

// Parsing errors: Using parseInt or parseFloat on a string that does not contain a numeric value
let result4 = parseInt("hello"); // NaN
let result5 = parseFloat("abc"); // NaN

console.log(result4); // Output: NaN
console.log(result5); // Output: NaN

// Implicit type coercion
let result6 = undefined + 5; // NaN

console.log(result6); // Output: NaN


// The isNaN(x)method: return true or false
let op1 = "me";
isNaN(op);   //returns true because op is Not a Number

// The toString() method: returns a number as a string.
let op2 = 10;
op.toString();     //returns "10"

// The toFixed() method: returns a string, with the number written with a specified number of decimals:
let op3 = 10.6789
op3.toFixed(0);           // returns number with zero decimals: 11
op3.toFixed(2);           // returns number with two decimals: 10.68.



// BOOLEAN
// The Boolean() method: to find out if an expression (or a variable) is true
let op6 = Boolean(10 > 9)   // op returns true