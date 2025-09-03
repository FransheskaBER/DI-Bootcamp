// Daily challenge: Stars

// What You will learn :
// For loops and nested for loops

// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *


//  USING REPEAT()

for (let i=1; i<=6; i++){
    console.log("*".repeat(i));
}

for (let i=0; i<=6; i++){
    for (let n=1; n<=1; n++){
        console.log("*".repeat(i) + "*".repeat(n))
    }
}


// USING STRING CONCATENATION (NOT REPEAT METHOD)

let stars = "";
for (let i = 1; i <= 6; i++) {
    stars = stars + "*";   // add one more star
    console.log(stars);
}

let stars2 = "";
for (let i = 1; i <= 6; i++) {
    for (let n=1; n<=1; n++){
    stars2 = stars2 + "*";   // add one more star
    console.log(stars2);
}}