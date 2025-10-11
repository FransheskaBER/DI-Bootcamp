// Exercises XP Gold
// Last Updated: October 8th, 2025

// What we will learn
// Fetch API
// Async/Await


// Exercise 1 : Giphy API #2
// Instructions
// Use the Giphy API Documentation for this exercise. Use the API KEY provided in the Exercises XP.
// Create a program to fetch a gif. Make sure to check the status of the Response and to catch any occuring errors.
// Once the server sends back data, append one random GIF to the page.
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Example Output:

const exercise1 = document.getElementById("exercise1");

async function fetchGif(){
    try{
        const response = await fetch("https://api.giphy.com/v1/gifs/random?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
        if (!response.ok){
            throw new Error("Sth went wrong");
        }

        const data = await response.json();
        const imgURL = data.data.images.original.url;
        console.log(imgURL);

        const img = document.createElement("img");
        img.src = imgURL;
        exercise1.appendChild(img);
    } catch(err){
        console.log(err);
    }
}
fetchGif();


// Exercise 2 : Analyze #2
// Instructions
// Analyse the code provided below - what will be the outcome?
let resolveAfterR2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfterR1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfterR2Seconds();
    console.log(slow);
    const fast = await resolveAfterR1Second();
    console.log(fast);
}

sequentialStart()
// Predicted outcome:
// ==SEQUENTIAL START==
// Starting slow promise
// slow promise is done
// slow
// Starting fast promise
// fast promise is done
// fast



// Exercise 3 : Analyze #3
// Instructions
// Analyse the code provided below - what will be the outcome?
let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

setTimeout(concurrentStart, 4000)
// PREDICTED OUTCOME:
// (after 4 seconds)
// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise
// (after 1 second)
// fast promise is done
// (after 1 second - plus the second above = 2 seconds)
// slow promise is done
// slow
// fast

// Explanation why fast log last and not after "fast promise is done":
// await slow blocks further lines in concurrentStart until slow resolves
// at 2s. While it’s waiting, other things (like the fast timer callback) can run and log.
// Only after await slow completes does execution move to the next line:
// console.log(await fast). By then, fast is already settled, so that await fast resolves
// immediately and prints fast.



// Exercise 4 : Modify fetch with Async/Await
// Instructions
// Using this code:
// const urls = [
//         "https://jsonplaceholder.typicode.com/users",
//         "https://jsonplaceholder.typicode.com/posts",
//         "https://jsonplaceholder.typicode.com/albums"
//       ];

// const getData = async function() {
//   const [ users, posts, albums ] = await Promise.all(urls.map(url =>
//       fetch(url).then(resp => resp.json())
//   ));
//   console.log('users', users);
//   console.log('posta', posts);
//   console.log('albums', albums);
// }

// getData()
// Modify the function above. Add async await in place of the following line:
// fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!
// Add a try catch block in order to catch any errors. To test the catch, modify one of the urls. The catch should console.log ‘ooooooops’.
const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"
      ];

const getData = async function() {
    try{
        const [ users, posts, albums ] = await Promise.all(
            urls.map(async (url) => {
                const res = await fetch(url);
                if(!res.ok) throw new Error("Something went wrong");
                const data = await res.json();
                return data;
            })
        );

    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);

    } catch(err){
        console.log("OOOOOOOOPS!!", err);
    }
}

getData()
