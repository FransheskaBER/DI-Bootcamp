// Mini project - Random Quote Generator
// Last Updated: October 8th, 2025

// What you will learn
// Conditionals, and ternary operator
// Loops
// Arrow Functions
// Array methods
// Objects


// What you will create
// Create a Random Quote Generator game in Javascript.

// Instructions
// Part 1 : Quote generator
// Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 2 ect…

// Populate the array with a few quotes that you like.

// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.


// Part 2 : Add buttons
// In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

// In the HTML file, under the displayed quote, create a few more buttons:
// A button that gives the number of character inside each quote (space included)
// A button that gives the number of character inside each quote (space NOT included)
// A button that gives the number of words in each quote
// A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.

// Part 3 : Filter form
// Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.

// Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.

const quotesData = [
    {
        id: 0,
        author: "Charles Lindbergh",
        quote: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
        likes: 0
    },
    {
        id: 1,
        author: "Albert Einstein",
        quote: "Imagination is more important than knowledge.",
        likes: 0
    },
    {
        id: 2,
        author: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken.",
        likes: 0
    },
    {
        id: 3,
        author: "Oscar Wilde",
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        likes: 0
    },
    {
        id: 4,
        author: "Oscar Wilde",
        quote: "We are all in the gutter, but some of us are looking at the stars.",
        likes: 0
    },
    {
        id: 5,
        author: "Oscar Wilde",
        quote: "Always forgive your enemies; nothing annoys them so much.",
        likes: 0
    },
    {
        id: 6,
        author: "Albert Einstein",
        quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
        likes: 0
    },
    {
        id: 7,
        author: "Albert Einstein",
        quote: "The important thing is not to stop questioning.",
        likes: 0
    },
    {
        id: 8,
        author: "Charles Lindbergh",
        quote: "I realized that if I had to choose, I would rather have birds than airplanes.",
        likes: 0
    },
    {
        id: 9,
        author: "Fransheska Echevarria",
        quote: "Education is life.",
        likes: 0
    }
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.getElementById("btn");
const likes = document.getElementById("likes");
const heart = document.getElementById("heart");
const likeCount = document.getElementById("likeCount");

let lastId = null;

btn.addEventListener("click",() => {
    successMsg.textContent = "";
    likes.style.visibility = "visible";

    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
    
    let randomQuote;
    do {
        randomQuote = Math.floor(Math.random() * quotesData.length);
    } while (quotesData[randomQuote].id === lastId);
    
    quote.textContent = quotesData[randomQuote].quote;
    author.textContent = quotesData[randomQuote].author;
    likeCount.textContent = quotesData[randomQuote].likes;
    
    lastId = quotesData[randomQuote].id;
});

const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const fd = new FormData(form); // this helps you collect data by the input name

    const newAuthor = fd.get("author");
    const newQuote = fd.get("quote");
    const newId = quotesData.length;
            
    const newQuoteObj = {
        id: newId,
        author: newAuthor,
        quote: newQuote,
        likes: 0
    };
    
    quotesData.push(newQuoteObj);
    
    // shown in the UI
    quote.textContent = newQuoteObj.quote;
    author.textContent = newQuoteObj.author;
    likes.style.visibility = "visible";
    likeCount.textContent = newQuoteObj.likes;

    lastId = newId;
    console.log(quotesData);
    
    form.reset();
})


const getAllChars = document.getElementById("CharWithSpace");
const getCharNoSpace = document.getElementById("CharNoSpace");
const getWords = document.getElementById("totalWords");
const likeBtn = document.getElementById("likeBtn");
const icon = likeBtn.querySelector("i");
const successMsg = document.getElementById("successMsg");

getAllChars.addEventListener("click", () => {
    if (quote.innerHTML == ""){
        successMsg.textContent = "Generate a quote first"
    } else {
        const totalSum = quote.textContent.length;
        successMsg.textContent = `The number of characters in this quote (space included) is: ${totalSum}`
    }
});

getCharNoSpace.addEventListener("click", () => {
    if (quote.innerHTML == ""){
        successMsg.textContent = "Generate a quote first"
    } else {
        const cleanQuote = quote.textContent.replace(/\s/g, "");
        const totalSum = cleanQuote.length
        successMsg.textContent = `The number of characters in this quote (space included) is: ${totalSum}`
    }
});

getWords.addEventListener("click", () => {
    if (quote.innerHTML == ""){
        successMsg.textContent = "Generate a quote first"
    } else {
        const cleanQuote = quote.textContent.replace(/[^A-Za-z]/g, " ").replace(/\s+/g, " ").trim();
        const words = cleanQuote.split(" ");
        const totalSum = words.length
        successMsg.textContent = `The number of characters in this quote (space included) is: ${totalSum}`
    }
});


likeBtn.addEventListener("click", () => {
    if (quote.innerHTML == ""){
        successMsg.textContent = "Generate a quote first";
        return;
    }
    
    const currentQuote = quotesData.find(quote => quote.id === lastId);
    console.log(currentQuote);

    if (icon.classList.contains("fa-regular")){
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        currentQuote.likes += 1;
    } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        currentQuote.likes -= 1;
    }
    likeCount.textContent = currentQuote.likes;
});

const searchForm = document.getElementById("searchBox");
const previousBtn = document.getElementById("previousQ");
const nextBtn = document.getElementById("nextQ");

const quoteSearched = document.getElementById("quoteSearch");
const authorSearched = document.getElementById("authorSearch");

let quotesBySearchAuthor = [];
let currentIndex =  0;
let lastAuthor = "";

function renderQ(searchAuthor){

    lastAuthor = searchAuthor;    
    quotesBySearchAuthor = quotesData.filter(quote => quote.author.trim().toLowerCase().includes(searchAuthor.trim().toLowerCase()));

    if (quotesBySearchAuthor.length === 0){
        console.log("No quotes");
        quoteSearched.textContent = `No quotes found for author "${searchAuthor}". Try again`;
        return;
    }

    if (quotesBySearchAuthor.length === 1){
        previousBtn.disabled = true;
        nextBtn.disabled = true;
    } else {
        previousBtn.disabled = false;
        nextBtn.disabled = false;
    }
    
    const currentQ = quotesBySearchAuthor[currentIndex];
    quoteSearched.textContent = currentQ.quote;
    authorSearched.textContent = currentQ.author;

    console.log(quotesBySearchAuthor);
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formValues = new FormData(searchForm);
    const searchAuthor = formValues.get("author");
    console.log(searchAuthor);

    renderQ(searchAuthor);

    searchForm.reset();
});

previousBtn.addEventListener("click", () => {
    if(currentIndex === 0){
        currentIndex = quotesBySearchAuthor.length - 1
    } else{
        currentIndex = currentIndex - 1;
    }
    renderQ(lastAuthor);
});

nextBtn.addEventListener("click", () => {
    if(currentIndex === quotesBySearchAuthor.length - 1){
        currentIndex = 0
    } else{
        currentIndex = currentIndex + 1;
    }
    renderQ(lastAuthor);
})

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const formValues = new FormData(searchForm);
//     const raw = formValues.get("author");
//     const searchAuthor = raw.trim().toLowerCase();
//     console.log(searchAuthor);

//     const quotesBySearchAuthor = quotesData.filter(quote => quote.author.trim().toLowerCase() === searchAuthor);

//     if (quotesBySearchAuthor.length === 0){
//         console.log("No quotes");
//         quoteSearched.textContent = `No quotes found for author "${searchAuthor}". Try again`;
//         return;
//     }

//     const randomIndex = Math.floor(Math.random() * quotesBySearchAuthor.length);
//     console.log(quotesBySearchAuthor[randomIndex]);

//     quoteSearched.textContent = quotesBySearchAuthor[randomIndex].quote;
//     authorSearched.textContent = quotesBySearchAuthor[randomIndex].author;

//     form.reset();
// });
