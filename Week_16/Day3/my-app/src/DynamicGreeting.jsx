import { useState } from "react";

export default function DynamicGreeting(){
    const [userName, setName] = useState("");

    function changeName(e){
        setName(e.target.value);
    }

    return (
        <div>
            <h1>Dynamic Greeting</h1>
            <label htmlFor="userName">Enter your name: </label>
            <input is="username" type="text" name="username" value={userName} onChange={changeName} />
            <h3>Hello, {userName}</h3>
        </div>
    );
}