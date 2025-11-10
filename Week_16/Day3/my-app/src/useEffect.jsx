import { useState, useEffect } from "react";

// SYNTAX:
// useEffect(() => {
//     // your side effect here
// }, [dependencies]); // The dependecy array decides when the effect runs so if you dont have this, it will run after every render.

// none dependency array means runs after every render
// [] dependency array means run after the first render
// [someVar] dependency array means run whenever "someVar" changes

// In other words, dependencies control when React runs the side effects.

export default function Sunrise(){
    const [city, setCity] = useState("London");
    const [coords, setCoords] = useState({ lat: 51.5074, lng: 0.1278 });
    const [sunrise, setSunrise] = useState("");

    function changeCity(e){
        const cityName = e.target.name;
        if (cityName === "new york"){
            setCity("New York");
            setCoords({ lat: 40.73061, lng: -73.935242 });
        } else if (cityName === "paris"){
            setCity("Paris");
            setCoords({ lat: 48.864716, lng: 2.349014 });
        }
    }


    useEffect(() => {
        fetch(`https://api.sunrise-sunset.org/json?lat=${coords.lat}&lng=${coords.lng}`)
            .then(res => res.json())
            .then(data => setSunrise(data.results.sunrise))
            .catch(err => console.log("Error fetching data:", err));
    }, [coords]); // runs every time coords changes


    return (
        <div>
            <p>The hour of the sunrise in {city} is {sunrise}</p>
            <button type="button" name="new york" onClick={changeCity}>Get Sunrise in New York</button>
            <button type="button" name="paris" onClick={changeCity}>Get Sunrise in Paris</button>
        </div>
    );
}



