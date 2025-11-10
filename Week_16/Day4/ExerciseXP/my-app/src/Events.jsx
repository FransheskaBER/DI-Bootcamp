import { useState } from "react";

export default function Events(){
    const [isToggleOn, setToggle] = useState(true);

    function changeToggle(){
        if (isToggleOn === true){
            setToggle(false);
        } else {
            setToggle(true);
        }
    }

    function clickMe(){
        alert("I was clicked!");
    }

    function handleKeyDown(e){
        if (e.key === "Enter"){
            alert(`The Enter key was pressed, your input is: ${e.target.value}`)
        }
    }

    return (
        <div>
            <button type="button" onClick={clickMe}>Click</button>
            <br /><br />
            <input type="text" onKeyDown={handleKeyDown}/>
            <br /><br />
            <button onClick={changeToggle}>{isToggleOn ? "ON" : "OFF"}</button>
        </div>
    );
}