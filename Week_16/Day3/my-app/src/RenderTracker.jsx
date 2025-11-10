import { useState } from "react";

export default function RenderTracker(){
    const [name, changeName] = useState('');

    console.log("Component re-rendered");

    function handleChange(e){
        changeName(e.target.value);
    }

    return (
        <div>
            <input type="text" name="name" value={name} onChange={handleChange}/>
            <p>Hello, {name}</p>
        </div>
    );
}