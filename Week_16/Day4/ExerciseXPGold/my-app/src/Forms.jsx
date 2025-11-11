import { useState } from 'react';

export default function Forms(){
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(null);
    const [errorMsg, setError] = useState("");
    const [msg, setMsg] = useState("");
    const [car, setCar] = useState("Volvo")

    function handleChange(e){ setUsername(e.target.value); }
    function handleAgeChange(e){ setAge(e.target.value); }

    function ageHandler(){
        alert ("Your age must be a number")
    }

    function nameHadler(){
        alert(`You are submitting: ${username}`);
    }

    function submitHandler(e){ 
        e.preventDefault();
        
        if (isNaN(Number(age))){
            // ageHandler();
            setError(<p style={{ fontWeight: "bold" }}>Your age must be a number</p>)
            return;
        }
        nameHadler();
    }

    let header = null;
    if (username && age){
        header = <h1>Hello, {username}. You are {age} years old :D</h1>;
    } else if (username && !age){
        header = <h1>Hello, {username}.</h1>;
    } else if (!username && age){
        header = <h1>You are {age} years old :D</h1>;
    }

    return (
        <div>
            {header}
            <form>
                
                <label htmlFor="username">Enter your username: </label><br />
                <input type="text" name="username" value={username} placeholder="e.g. Johndoe" onChange={handleChange} /><br /><br />
                <label htmlFor="username">Enter your age: </label><br />
                <input type="text" name="age" value={age} id="age" placeholder='e.g., 45' onChange={handleAgeChange} /><br />{errorMsg}<br />
                <textarea name="msg" value={msg} id="msg" placeholder='e.g., Write a comment...'></textarea><br />

                <select value={car} onChange={(e) => setCar(e.target.value)}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>

                <button type="button" onClick={submitHandler}>Submit</button>
            
            </form>
        </div>
    );
}