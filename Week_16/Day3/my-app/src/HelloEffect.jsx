import { useState, useEffect } from 'react';

export default function HelloEffect(){
    const [name, setName] = useState("");

    function changeName(e){
        setName(e.target.value);
    }

    useEffect(() => {
        console.log("HelloEffect mounted");
        return () => console.log("HelloEffect unmounted");
    }, []);

    useEffect(() => {
        document.title = `Hello, ${name || "Stranger"}`;
    }, [name])

    return (
        <div>
            <h1>HelloEffect Component</h1>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={name} onChange={changeName}/>
            <p>Hello, {name}</p>
        </div>
    );
}