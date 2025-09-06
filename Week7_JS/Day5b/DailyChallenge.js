// Daily challenge: Planets

// What You will learn :
// DOM tree

// Instructions
// Create an array which value is the planets of the solar system.
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black", "white"];

// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).

planets.forEach((planet, index) => {
    let planetsDiv = document.createElement("div");
    planetsDiv.setAttribute("class", "planet");

    let value = colors[index];
    planetsDiv.classList.add(planet.toLowerCase());
    planetsDiv.style.backgroundColor = value;
    
    document.querySelector("section").appendChild(planetsDiv);
})

// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets? Or an array of objects ?

let planetMoons = [
  { name: "Mercury", moons: 0 },
  { name: "Venus", moons: 0 },
  { name: "Earth", moons: 1 },
  { name: "Mars", moons: 2 },
  { name: "Jupiter", moons: 95 },
  { name: "Saturn", moons: 146 },
  { name: "Uranus", moons: 28 },
  { name: "Neptune", moons: 16 }
];

let allPlanets = document.querySelectorAll(".planet")
console.log(allPlanets)

allPlanets.forEach((planet, index) =>{
    let childDiv = document.createElement("div");
    childDiv.classList.add("moon");
    childDiv.textContent = planetMoons[index].moons
    planet.appendChild(childDiv);
})


