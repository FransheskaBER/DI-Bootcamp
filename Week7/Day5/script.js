// --- Exercise 1 ---

// Access the <div> node in 2 different ways.
// Access the <ul> node in 2 different ways.
// Access the second <li> (Pete) in 2 different ways.

let div = document.getElementsByTagName("div")[0];
console.log(div);

let div2 = document.querySelector("div");
console.log(div2);

let ul = document.getElementsByTagName("ul")[0];
console.log(ul);

let ul2 = document.querySelector("ul")
console.log(ul2)

for (let li of ul2){
    let li2 = document.getElementsByTagName("li")[1];
    console.log(li2)
}

// --- Exercise 2 ---
// your code here

// --- Exercise 3 ---
// your code here

