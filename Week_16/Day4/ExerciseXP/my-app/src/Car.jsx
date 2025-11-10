import { useState } from "react";
import Garage from "./Garage.jsx";

export default function Car({model}){
    const [color, setColor] = useState("red");

    return (
        <div>
            <h1>This car is {color} {model}</h1>
            <Garage size="small"/>
        </div>
    );
}