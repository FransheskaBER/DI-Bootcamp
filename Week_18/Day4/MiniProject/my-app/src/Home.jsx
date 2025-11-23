import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home({ onAddFav }) {
    const [city, setCity] = useState("");
    const [displayCity, setDisplayCity] = useState("");
    const [weather, setWeather] = useState({ temperature: "", weatherIcon: "", weatherText: "" });
    const [forecasts, setForecasts] = useState([]);
    const [heart, setHeart] = useState(false);

    async function getCityKey(){
        try {
            if (!displayCity) return;

            const res = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIkey}&q=${displayCity}`);
            if (!res.ok) throw new Error("Failed fetching");
            const data = await res.json();
            
            if (!data.length) {
                console.log("City not found");
                return null;
            }

            return data[0].Key;

        } catch (err) {
            console.log("Failed: ", err);
            return null;
        }
    }

    async function getCurrentWeather(cityKey) {
        try {
            if (!cityKey) return;

            const res = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${APIkey}`);
            if (!res.ok) throw new Error("Failed fetching");
            const data = await res.json();  
            const wArr = data[0];          
            const nextWeather = {
                temperature: wArr.Temperature.Metric.Value,
                weatherIcon: wArr.WeatherIcon,
                weatherText: wArr.WeatherText,
            };

            setWeather(nextWeather);
        } catch (err) {
            console.log("Failed: ", err);
        }
    }

    async function get5daysForecast(cityKey) {
        try {
            if (!cityKey) return;

            const res = await fetch(`https://dataservice.accuweather.com//forecasts/v1/daily/5day/${cityKey}?apikey=${APIkey}&metric=true`);
            if (!res.ok) throw new Error("Failed fetching");
            const data = await res.json();       
            setForecasts(data.DailyForecasts);
        } catch (err) {
            console.log("Failed: ", err);
        }
    }

    async function handleWeatherClick(){
        try {
            const cityKey = await getCityKey();
            setDisplayCity(city);
            await getCurrentWeather(cityKey);
            await get5daysForecast(cityKey);
        } catch (err) {
            console.log(err);
        }
    }

    function formatDay(dateString) {
        return new Date(dateString).toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric"
        });
    }

    function handleAddFavs() {
        if (!weather.weatherText) return;

        const favorites = {
            id: Date.now(),
            city, 
            weather,
        };
        onAddFav(favorites);
        setHeart(true);
    }

    return (
        <>
        <div className="weather-wrap">
            <div className="search-bar">
                <input type="text" value={city} onChange={(e) => { setCity(e.target.value); setHeart(false); }} />
                <button onClick={handleWeatherClick}>Get Weather</button>
            </div>

            {weather.weatherText && (
                <div className="container-fluid d-flex flex-column align-items-center gap-4">

                    <div className="card" style={{ width: "35rem" }}>
                        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h4>Current Weather</h4>
                            <button onClick={handleAddFavs}><i className={ heart ? "bi bi-heart-fill text-danger" : "bi bi-heart"}></i> Add to Favorites</button>
                        </header>
                        <img src={`https://www.accuweather.com/assets/images/weather-icons/v2a/${weather.weatherIcon}.svg`} alt="weathericon"/>
                        <div className="card-body">
                            <h5 className="card-title">{displayCity.toUpperCase()}</h5>
                            <h3>{weather.temperature} °C</h3>
                            <p className="card-text">{weather.weatherText}</p>
                        </div>
                    </div>
                
                    <div className="container text-center">
                        <div className="row justify-content-center g-3">
                            {forecasts.map((f) => (
                                <div className="col d-flex" key={f.EpochDate}>
                                    <div className="card h-100 w-100">
                                        <img src={`https://www.accuweather.com/assets/images/weather-icons/v2a/${f.Day.Icon}.svg`} alt="weathericon"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{formatDay(f.Date)}</h5>
                                            <h3>{f.Temperature.Maximum.Value} °C</h3>
                                            <p className="card-text">{f.Day.IconPhrase}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            )}
        </div>
        </>
    );
}