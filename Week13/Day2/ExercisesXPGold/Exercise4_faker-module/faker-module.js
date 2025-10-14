// Exercise 4 : Faker Module
// Instructions
// Install the faker module, and read the documentation.

// Create an empty array called users. Tip: It’s an array of objects

// Create a function that adds objects to the users array. Each user has the properties: name, address street and country. Use faker to populate them with fake data.

// Bonus : Find a node module that allows to prompt the user for his name, address street and country in order to add this information into the users array.

import { faker } from "@faker-js/faker";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const users = [];

export function getAllUsers(){
    for (let i=0; i<5; i++){
        const name = faker.person.firstName();
        const street = faker.location.street();
        const building = faker.location.buildingNumber();
        const city = faker.location.city();
        const country = faker.location.country();
        
        users.push({
            personName: name,
            street: `${building} ${street}, ${city}`,
            country: country
        });
    }
    console.log(users);
}
getAllUsers()

export function getUserData(){
    const name = prompt("What's your first name? ");
    const street = prompt("Enter your street only: ");
    const building = prompt("Enter the number of your building: ");
    const city = prompt("Enter the city you live: ");
    const country = prompt("Enter the country you live: ");
    
    users.push({
        personName: name,
        street: `${building} ${street}, ${city}`,
        country: country
    });
    
    console.log(users);
}
getUserData();

