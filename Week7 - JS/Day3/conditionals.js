// CONDITIONALS

// if statement
// if…else statement
// if…else if… statement.


// 1. if statement

// Syntax:
// if (expression) {
//    Statement(s) to be executed if the expression is true
// }

let age = 20

    if (age > 18) {
        console.log("You're a big man")
    }


// 2. if…else statement

// Syntax:
// if (expression) {
//    Statement(s) to be executed if expression is true
// } else {
//    Statement(s) to be executed if the expression is false
// }

let age = 20

if (age > 18) {
    console.log("We can go to a pub together !!")
} else {
     console.log("Sorry...You have to stay at home tonight")
}


// 3. if…else if… statement.

// Syntax:
// if (expression 1) {
//    Statement(s) to be executed if expression 1 is true
// } else if (expression 2) {
//    Statement(s) to be executed if expression 2 is true
// } else if (expression 3) {
//    Statement(s) to be executed if expression 3 is true
// } else {
//    Statement(s) to be executed if no expression is true
// }

let age = 20

if (age === 18) {
    console.log("It's your birthday !!")
} else if (age > 18) {
    console.log("We can go to a pub together !!")
} else {
    console.log("Sorry...You have to stay at home tonight")
}

