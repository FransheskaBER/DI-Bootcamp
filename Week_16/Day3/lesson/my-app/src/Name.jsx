import { useState } from 'react'; 

export default function Name(){
    const [name, setName] = useState("");

    function handleName(e){
        setName(e.target.value);
    }
    

    return (
        <div>
            <input type='text' onChange={handleName}></input>
            <h2>Hello, {name}</h2>
        </div>
    );
}