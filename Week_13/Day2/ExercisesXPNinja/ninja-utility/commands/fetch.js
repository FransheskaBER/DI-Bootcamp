import axios from "axios";

export async function getWeather(city){
    try{
        const response = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=49e275204ea84bb2a1180605251410&q=${city}`
        );
        
        const degrees = response.data.current.temp_c;
        const condition = response.data.current.condition.text;        
        console.log(`The current weather in ${city} is ${degrees.toFixed(0)}° and the condition is ${condition}`);

    } catch(err){
        console.log("ERROR: ", err.message);
    }
}

