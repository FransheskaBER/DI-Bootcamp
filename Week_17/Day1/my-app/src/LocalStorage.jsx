// REACT daoesnt save data in a state, but you can use localStorage to keep the state data in the browser's memory!
// so if you refresh the page, the data is not gone.

// SAVING SOMETHING:
localStorage.setItem("key", "value");

// READING SOMETHING:
localStorage.getItem("key");

// REMOVING ONE ITEM:
localStorage.removeItem("key");

// REMOVING EVERYTHING:
localStorage.clear();

// SAVING OBJECTS/ARRAYS:
// (localStorage only stores strings, so you need to convert to store obj or arr)

// save object:
const user = { name: "Fran", age: 35 };
localStorage.setItem("user", JSON.stringify(user));

// read object:
const stored = JSON.parse(localStorage.getItem("user"));

// USING LOCALSTORAGE IN REACT:
import { useState, useEffect } from "react";

export default function NameSaver(){
    const [name, setName] = useState(() => 
        // load from localstorage on first render
        localStorage.getItem("name") || ""
);

    useEffect(() => {
        // sabe to localstorage wheneevr name changes
        localStorage.setItem("name", name);
    }, [name]);

    return (
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type your name"/>
    );
}


// EXERCISES:

import { useState, useEffect } from "react";
export default function PersistentInput() {
    const [name, setName] = useState(() => 
        localStorage.getItem("name") || ""
    );

    useEffect(() => {
        localStorage.setItem("name", name)
    }, [name])

    return (
        <input type="text" placeholder="Enter your name..." value={name} onChange={(e) => setName(e.target.value)}/>
    );
}

import { useState, useEffect } from "react";
export default function PersistentCounter(){

    const [count, setCount] = useState(() => Number(localStorage.getItem("count")) || 0);

    useEffect(() => {
        localStorage.setItem("count", count)
    }, [count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button type="button" onClick={() => setCount(prev => prev + 1)}>+</button><br />
            <button type="button" onClick={() => setCount(prev => prev - 1)}>-</button><br />
            <button type="button" onClick={() => {
                setCount(0);
                localStorage.removeItem("count");
                }}>Reset Count</button>
        </div>
    );
}

import { useState, useEffect } from "react";
export default function PersistentTodos(){

    const [list, setList] = useState(() => {
        return JSON.parse(localStorage.getItem("list") || "[]");
    });
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    function addTask(){
        const task = newTask.trim();
        if (!task) return;
        setList((prev) => [ ...prev, task ]);
        setNewTask("");
    }

    return (
        <div>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Type your new to-do task..." />
            <button type="button" onClick={addTask}>Add New To-do</button>
            <ul>
                {list.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <button type="button" onClick={() => {
                setList([]);
                localStorage.removeItem("list");
            }}>Clear List</button>
        </div>
    );
}


