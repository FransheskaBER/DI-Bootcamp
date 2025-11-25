import { createContext, useReducer } from "react";

export const TasksContext = createContext({
    tasks: [],
    addTask: () => {},
    editTask: () => {},
    completeTask: () => {},
    removeTask: () => {},
    filterTasks: () => {},
    deleteTasks: () => {},
});

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return { ...state, items: [ ...state.items, action.payload ]};
        case "edit": {
            const { id, newTitle } = action.payload;
            return {
                ... state,
                items: state.items.map((task) => task.title === id ? { ...task, title: newTitle } : task),
                };
            };
        case "complete":
            return {
                ...state, 
                items: state.items.map((task) => task.id === action.payload ? { ...task, completed: !task.completed } : task),
            };
        case "remove":
            return { ...state, items: state.items.filter((task) => task.id !== action.payload)};
        case "filter":
            return { ...state, filter: action.payload };
        case "deleteAll":
            return { ...state, items: [] };
        default:
            return state;
    }
}

export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(reducer, { items: [], filter: null });
    const addTask = (newTask) => dispatch({ type: "add", payload: newTask });
    const editTask = (id, newTitle) => dispatch({ type: "edit", payload: { id, newTitle }});
    const completeTask = (id) => dispatch({ type: "complete", payload: id });
    const removeTask = (id) => dispatch({ type: "remove", payload: id });
    const filterTasks = (filterValue) => dispatch({ type: "filter", payload: filterValue });
    const deleteTasks = () => dispatch({ type: "deleteAll" });

    const contextForChildren = { tasks, addTask, editTask, completeTask, removeTask, filterTasks, deleteTasks };

    return (
        <TasksContext.Provider value={contextForChildren}>
            {children}
        </TasksContext.Provider>
    );
}