// Exercises XP Ninja
// Last Updated: October 8th, 2025

// What we will learn
// Fetch API
// Async/Await


// Exercise 1 : Giphy API #3
// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// Use the Fetch API to fetch the gifs. Make sure to check the status of the Response and to catch any occuring errors.
// Append the relevant gifs to the page.
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to remove all of the GIFs by clicking a delete button

const myForm = document.getElementById("searchForm");
const gifContainer = document.getElementById("gifContainer");
const deleteAll = document.getElementById("deleteAll");

myForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(myForm);
    const value = form.get("gif");

    console.log(value);

    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&limit=1&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        
        if (!response.ok) throw new Error("Something went wrong")

        const data = await response.json();
        const imageURL = data.data[0].images.original.url;
        console.log(imageURL);

        const img = document.createElement("img");
        img.src = imageURL;
        gifContainer.appendChild(img);

    } catch(err){
        console.log("ERRORRRRRR: ", err);
    }
    myForm.reset()
})

deleteAll.addEventListener("click", () => {
    gifContainer.innerHTML = "";
    gifContainer.textContent = "All gifs deleted."
})



// Exercise 2 : Analyze #4
// Instructions
// Analyze the code provided below - what will be the outcome?
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

//The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0]);
        console.log(messages[1]);
    });
}

setTimeout(concurrentPromise, 1000)
// PREDICTED OUTCOME:
// (after 1 second)
// ==CONCURRENT START with Promise.all==
// starting slow promise
// starting fast promise
// fast promise is done 
// slow promise is done
// slow
// fast


// Exercise 3 : Analyze #5
// Instructions
// Analyze the code provided below - what will be the outcome?
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

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))()
    ]);
}

setTimeout(parallel, 5000)
// PREDICTED OUTCOME:
// after 5 seconds:
// ==PARALLEL with await Promise.all==
// starting slow promise
// starting fast promise
// // (afters 1 second)
// fast promise is done
// fast
// (afters 1 second)
// slow promise is done
// slow



// Exercise 4 : Analyze #6
// Instructions
// Analyze the code provided below - what will be the outcome?
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

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000)
// PREDICTED OUTCOME:
// (after 13 seconds)
// ==PARALLEL with Promise.then=='
// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow