// Phases of react:
// 1. Mounting > when the component appears for the first time on the screen like fetching data or starting a timer.
// 2. Updating> when a prop/state changed like re-fetching or scrolling.
// 3. Unmounting > when the component is removed from the screen like stopping the timer or removing event listeners.

// USE EFFECT
// let's you run code after render and you can control WHEN it runs using the dependency array []


import { useState, useEffect } from "react";

function Timer(){
    const [count, setCount] = useState(0);

    // Mount + Update + Unmount
    useEffect(() => {
        console.log("Mounted or updated");

        const timer = setInterval(() => {
            setCount(prev => prev + 1);
        }, 2000);

        return () => {
            console.log("Component unmounted");
            clearInterval(timer);
        };
    }, []); // empty array => run only ONCE on mount

    return <h2>Seconds: {count}</h2>
}



// ERROR BOUNDARY
// We first need to install it with "npm i react-error-boundary"
// import { ErrorBoundary } from "react-error-boundary";

export default function ErrorFallBack({ error }){
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
        </div>
    );
}

export default function BuggyComponent(){
    throw new Error("I crashed!");
}

// Use ERROR BOUNDARY for components and TRY/CATCH inside functions or event handlers
// Error Boundary is what to render when a component crashes whereas Try/catch is how to run the code.
// Error Boundary catches render/lifecyle/constructors whereas Try/Catch catches code logic/async/events.
// Error Boundary shows a fallback UI whereas Try/Catch handle logic error gracefully.

// In other words, TRY/CATCH handles code errors whereas ERROR BOUNDARY handles UI errors.


// HANDLER FUNCTION
// When you pass functions in event handlers like onClick, onChange, you pass it wihtout parenthesis ()
// because React will call the function when the event happens and not while rendering. So React gives 
// an event object ansd you pass the functions without parenethesesis.

import { useMemo, useState } from "react";
import SearchCar from "./SearchCar.jsx";
import Car from "./Car.jsx";

const cars = [
  { id: 1, brand: "ford", name: "ford torino", year: "1970-01-01", origin: "USA" },
  { id: 2, brand: "ford", name: "ford galaxie 500", year: "1970-01-01", origin: "USA" },
  { id: 3, brand: "chevrolet", name: "chevrolet vega 2300", year: "1971-01-01", origin: "USA" },
  { id: 4, brand: "peugeot", name: "peugeot 504 (sw)", year: "1972-01-01", origin: "Europe" },
  { id: 5, brand: "renault", name: "renault 12 (sw)", year: "1972-01-01", origin: "Europe" },
];

export default function App(){
    const [selectedBrand, setSelectedBrand] = useState("");

    const brands = useMemo(
        () => Array.from(new Set(cars.map(car => car.brand))),
        []
    );

    const filtered = useMemo(
        () => (selectedBrand ? cars.filter(car => car.brand === selectedBrand) : []),
        [selectedBrand]
    );

    return (
        <div className="box">
            <SearchCar
                brands={brands}
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
            />
            <Car 
                selectedBrand={selectedBrand}
                cars={filtered}   
            />
        </div>
    );
}


// ERROR BOUNDARY
// it is a safety net react component
// caches JS errors in the render phase of its child components and allows a fallback instead of crashing the whole app
// Error boundaries catches errors during rendering, inside lifecycle methods, in constructors of child components.


// REACT FORMS
// data from forms are kept in STATE which means that data and UI are always in sync
// A controlled components means that the form input's value is controlled by REACT STATE
// for example:

function Example() {
    const [name, setName] = useState("");

    function handleChange(e){
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("Submitted name:", name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
            <button>Submit</button>
        </form>
    );
}

// Reusable INput Components
// instead of repeating label and input everywhere, you can make a reusable component that takes props like id, label, type, value

function InputWithLabel({ id, label, type, value, onChange }) {
    return (
        <>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} value={value} onChange={onChange} />
        </>
    );
}

// Then, in your form:
function UserData() {
    const [form, setForm] = useState({ name: "", age: "", email: "" });

    function handleChange(e){
        setForm({ ...form, [e.target.id]: e.target.value });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputWithLabel id="name" label="name" type="text" value={form.name} onChange={handleChange}/>
            <InputWithLabel id="age" label="Age" type="number" value={form.age} onChange={handleChange} />
            <InputWithLabel id="email" label="Email" type="email" value={form.email} onChange={handleChange} />
            <button>Submit</button>
        </form>
    );
}