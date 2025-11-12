import "./App.css";
// import { ErrorBoundary } from 'react-error-boundary';
// import { useState } from 'react';
// import { ErrorFallBack, BuggyComponent } from './Lessons.jsx';
// import ToggleMessage from './ToggleMessage.jsx';
// import RandomBug from './RandomBug.jsx';
// import { useMemo, useState } from "react";
// import SearchCar from "./SearchCar.jsx";
// import Car from "./Car.jsx";
// import AnimalSelector from './AnimalSelector.jsx';
// import BuggyCounter from "./BuggyCounter.jsx";
// import ErrorFallBack from "./ErrorBoundary.jsx";
import ContactForm from "./ContactForm.jsx";


// const animals = ["Dog", "Cat", "Bird"];

// const cars = [
//   { id: 1, brand: "ford", name: "ford torino", year: "1970-01-01", origin: "USA" },
//   { id: 2, brand: "ford", name: "ford galaxie 500", year: "1970-01-01", origin: "USA" },
//   { id: 3, brand: "chevrolet", name: "chevrolet vega 2300", year: "1971-01-01", origin: "USA" },
//   { id: 4, brand: "peugeot", name: "peugeot 504 (sw)", year: "1972-01-01", origin: "Europe" },
//   { id: 5, brand: "renault", name: "renault 12 (sw)", year: "1972-01-01", origin: "Europe" },
// ];

// function RandomBug(){
//   const { showBoundary } = useErrorBoundary();
  
//     return (
//       <button onClick={() => showBoundary(new Error("Oops!"))}>
//         Cause Error
//       </button>
//     );
// }

// function ErrorFallBack({ error }){
//   return (
//     <div role="alert">
//       <p>Something went wrong, please refresh.</p>
//       <pre>{error.message}</pre>
//     </div>
//   );
// }


function App() {
  // const [selectedAnimal, setSelectedAnimal] = useState("");

  // const [selectedBrand, setSelectedBrand] = useState("");
  
  // const brands = useMemo(
  //   () => Array.from(new Set(cars.map(car => car.brand))),
  //   []
  // );
  
  // const filtered = useMemo(
  //   () => (selectedBrand ? cars.filter(car => car.brand === selectedBrand) : []),
  //   [selectedBrand]
  // );
  
  return (
    < ContactForm />
    // <div>
    //   <ErrorBoundary FallbackComponent={ErrorFallBack}>
    //     <BuggyCounter />
    //   </ErrorBoundary>
    // </div>

    // {/* <Timer /> */}
    // {/* <ToggleMessage /> */}

    // {/* <ErrorBoundary FallbackComponent={ErrorFallBack}>
    //   <BuggyComponent />
    // </ErrorBoundary> */}

    // {/* <ErrorBoundary FallbackComponent={ErrorFallBack}>
    //   <RandomBug />
    // </ErrorBoundary> */}

    // {/* <div className="box">
    //   <SearchCar
    //       brands={brands}
    //       value={selectedBrand}
    //       onChange={(e) => setSelectedBrand(e.target.value)}
    //   />
    //   <Car 
    //       selectedBrand={selectedBrand}
    //       cars={filtered}   
    //   />
    // </div> */}

    // {/* <div>
    //   <AnimalSelector
    //     animals={animals}
    //     value={selectedAnimal}
    //     onChange={(e) => setSelectedAnimal(e.target.value)}
    //   />
    //   <p>You chose: {selectedAnimal}</p>
    // </div> */}
  );
}

export default App
