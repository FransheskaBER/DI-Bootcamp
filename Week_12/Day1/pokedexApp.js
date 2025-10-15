// Pokedex App

// What you will learn
// async/await
// Fetch API

// What you will create
// Pokedex App
// In this project you will have to create a Pokémon Pokedex like this.

// Instructions
// You should use the Poke API: https://pokeapi.co/ to get all the information you need to display.

// You can use these images for the logo and the Pokedex (right click, “Save image as..”):

// Some Tips:
// Create the corresponding tags in your HTML file, and select your elements in the javascript file.

// You will use three buttons, one to fetch a random Pokémon, and the other two for the left and right buttons.

// The random button will call an Async Await function to fetch the API and display the data:
// (image, name, id, height, weight and type).

// Make sure to add a catch block in the case of an error and display a message like “Oh no!
// That Pokemon isn’t available…”.

// Remember to use a loading message while fetching the random Pokémon. It could be an icon or a gif.

// You will also use 2 Async Await functions to fetch the API when pressing the “previous” and “next” buttons.
// The “previous” will fetch the previous pokemon from the current one that is being displayed and the “next”
// will fetch the next pokemon from the current one that is being displayed. (You can console.log a global
// variable in order to achieve this).

const randomBtn = document.getElementById("randomBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const pokemonName = document.getElementById("pokemonName");
const pokemonInfo = document.getElementById("pokemonData");
const imgContainer = document.querySelector(".imgContainer");
const pokemonContainer = document.querySelector("#pokemonContainer");

const getPokemonList = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");
    
    if (!response.ok){
        throw new Error(`Failed to fetch Pokemon names list`);
    }

    const data = await response.json();
    const results = data.results;
    console.log(results);

    const promises = results.map(pokemon =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then(response => response.json())
            .catch(err => {
                console.log("Something went wrong when fetching: ",pokemon.name + "Error:" + err);
                return null;
            })
        );
    const pokemonList = (await Promise.all(promises)).filter(Boolean);
    console.log(pokemonList);
    return pokemonList;
}

let pokemonList = [];
let currentIndex = 0;

function render(index){
    const pokemon = pokemonList[index];

    imgContainer.innerHTML = "";
    const pokemonImg = document.createElement("img");
    pokemonImg.src = pokemon.sprites.back_default || pokemon.sprites.front_default || "";
    imgContainer.appendChild(pokemonImg);

    pokemonName.textContent = pokemon.name;
    pokemonInfo.innerHTML = `Pokemon number: ${pokemon.id}<br>Height: ${pokemon.height}<br>Weight: ${pokemon.weight}<br>Type: ${pokemon.types[0].type.name}`;
}

randomBtn.addEventListener("click", async () => {

    imgContainer.innerHTML = "";      // clear previous image
    pokemonName.textContent = "";     // clear name
    pokemonInfo.textContent = "";     // clear data area

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-spinner", "fa-spin");
    const text = document.createTextNode("Loading...");
    pokemonInfo.append(icon, text);

    try {
        pokemonList = await getPokemonList();
        currentIndex = Math.floor(Math.random() * pokemonList.length);
        render(currentIndex);
    } catch (error){
        pokemonName.textContent = "";
        pokemonInfo.textContent = "Something went wrong fetching the Pokémon"
        console.log(error);
    }
});

leftBtn.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = pokemonList.length - 1; // jump to last
    } else {
        currentIndex = currentIndex - 1; // go left normally
    }
    render(currentIndex);
})

rightBtn.addEventListener("click", () => {
    if (currentIndex === pokemonList.length - 1) {
        currentIndex = 0; // jump to start
    } else {
        currentIndex = currentIndex + 1; // go right normally
    }
    render(currentIndex);
})






// const getPokemonName = async () => {
    
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");
    
//     if (!response.ok){
//         throw new Error(`Failed to fetch Pokémon list`);
//     }

//     const data = await response.json();
//     const randomIndex = Math.floor(Math.random() * 1302);
//     return data.results[randomIndex].name;
// }

// let currentPokemons = [];
// let currentIndex = null;
// randomBtn.addEventListener("click", async() => {
//     try {
//         const name = await getPokemonName();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

//         if (!response.ok) throw new Error("Failed to fetch Pokémon details");

//         const data = await response.json();
//         currentPokemons.push(data);
//         currentIndex = Math.floor(Math.random() * currentPokemons.length);

//         pokemonImg.src = data.sprites.front_default;
//         pokemonName.textContent = data.name
//         pokemonInfo.innerHTML = `Pokemon number: ${data.id}<br>Height: ${data.height}<br>Weight: ${data.weight}<br>Type: ${data.types[0].type.name}`;


    
//     } catch (error){
//         pokemonImg.src = "";
//         pokemonName.textContent = "";
//         pokemonInfo.textContent = "Something went wrong fetching the Pokémon"
//         console.log(error);
//     }
// });