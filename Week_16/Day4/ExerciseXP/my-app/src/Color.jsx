import { useState, useEffect } from "react";

export default function Color(){
    const [favColor, setFavColor] = useState("Red");

    function changeToBlue(){
        setFavColor("Blue");
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            alert("useEffect reached")
            setFavColor("Yellow")
        }, 3000);

        return () => clearTimeout(timer);
        
    }, [])

    return (
        <div>
            <h1>
                My Favorite Color is {" "}
                <span style={{ color: favColor, fontFamily: "cursive" }}>{favColor}</span>
            </h1>
            <button onClick={changeToBlue}>Change to Blue</button>
        </div>
    );
}