// Daily Challenge: Currency Converter
// Last Updated: March 21st, 2025

// What You will learn :
// Fetch API
// async await


// Instructions
// You will create a currencies converter.
// In this application we’re going receive data from two asynchronous sources.

// You will use :

// This documentation
// Create your own API key by signing up - you will be able to make more requests :)


// Note
// The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

// To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.

const currencyList = document.querySelectorAll(".currencyList");
const btn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const input = document.querySelector("input");
const conversion = document.getElementById("result");
const form = document.getElementById("myForm");

async function getSupportedCodes(){
    try{
        const response = await fetch("https://v6.exchangerate-api.com/v6/d54d2f59f5fb0d51c4d659d9/codes");

        if (!response.ok) throw new Error(`HTTP ERROR: ${response.status}`);

        const data = await response.json()

        const supportedCodes = data.supported_codes; // you get an array of arrays

        currencyList.forEach(list => {
            supportedCodes.forEach(code => {
                const option = document.createElement("option");
                option.value = code[0]
                option.textContent = `${code[0]} - ${code[1]}`
                list.appendChild(option);
            });
        });
    } catch(error){
        console.error(error);
    }
}

getSupportedCodes();

async function getResult(){
    try {
        const data_ = new FormData(form);
        const formObject = Object.fromEntries(data_)

        const response = await fetch (
            `https://v6.exchangerate-api.com/v6/d54d2f59f5fb0d51c4d659d9/pair/${formObject.baseCurrency}/${formObject.targetCurrency}/${formObject.amount}`
        );
            
        if (!response.ok) {
            throw new Error (`Something went wrong. Status: ${response.status}`)
        }
            
        const data = await response.json();
        const result = data.conversion_result

        if (!formObject.amount){
            alert("Please enter a valid amount")
        } else {
            conversion.textContent = `${Math.round(result * 100) / 100} ${formObject.targetCurrency}`
        };

    } catch (error){
        console.error(error);
        conversion.textContent = error;
    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    getResult();
});

swapBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const fromCurrency = document.querySelector("#baseCurrency");
    const toCurrency = document.querySelector("#targetCurrency");

    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;

    getResult();
});
