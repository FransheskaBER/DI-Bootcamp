import { useState } from 'react';
import './App.css'
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((_, index) => index !== action.payload);
    case "deleteAll":
      return [];
  }
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [taskName, setTaskName] = useState("");

  return (
    <>
    <label>Add a new task: <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/></label> 
    <button onClick={() => {
      dispatch({
        type: "add",
        payload: taskName,
      })
      setTaskName("")
    }}>Add Task</button>

    <h2>All To-do Tasks:</h2>
    <ul>
      {tasks.map((task, index) => (
        <div key={task} style={{ display: "flex", alignItems:"center", gap: "8px"}}>
          <li>{task}</li>
          <button onClick={() => {
            dispatch({
              type: "remove",
              payload: index,
            })
          }}>Remove</button>
        </div>
      ))}
    </ul>
    <button onClick={() => {
      dispatch({
        type: "deleteAll"
      })
    }}>Delete All Tasks</button>
    </>
  )
}

export default App
