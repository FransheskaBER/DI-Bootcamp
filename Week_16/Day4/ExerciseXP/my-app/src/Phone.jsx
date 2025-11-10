import { useState } from "react";

export default function Phone(){
    const [brand, setBrand] = useState("Samsung");
    const [model, setModel] = useState("Galaxy S20");
    const [color, setColor] = useState("black");
    const [year, setYear] = useState(2020);

    function changeColor(){
        if (color === "black"){
            setColor("blue");
        } else if (color === "blue") {
            setColor("black");
        }
    }

    return (
        <div>
            <h1>My phone is {brand}</h1>
            <h3>It is a {color} {model} from {year}</h3>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}