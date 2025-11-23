import { createContext, useReducer } from "react";

export const TasksContext = createContext({
    tasks: [],
    handleAdd: () => {},
    handleRemove: () => {},
    handleCompletion: () => {},
});

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, action.payload]; // payload: task (which it's going to be: { id: Date.now(), title: "", completed: false })
        case "remove":
            return state.filter((item) => item.id !== action.payload); // payload: id
        case "complete":
            return state.map((item) => 
                item.id === action.payload ? { ...item, completed: !item.completed } : item);  // payload: id
        default:
            return state;
    }
}

export function TasksProvider({ children }){
    const [tasks, dispatch] = useReducer(reducer, []);
    const handleAdd = (task) => dispatch({ type: "add", payload: task });
    const handleRemove = (id) => dispatch({ type: "remove", payload: id });
    const handleCompletion = (id) => dispatch({ type: "complete", payload: id });

    const passContext = { tasks, handleAdd, handleRemove, handleCompletion }

    return (
        <TasksContext.Provider value={passContext}>
            {children}
        </TasksContext.Provider>
    );
}

