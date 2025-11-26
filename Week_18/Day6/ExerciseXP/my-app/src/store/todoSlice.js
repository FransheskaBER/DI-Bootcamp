import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        add(state, action) {
            // inmutating style (old way)
            // return [ ...state, action.payload ];
            // Mutating style (new way since Redux uses Immer that handles inmmutability for you)
            state.push(action.payload)
        },
        remove(state, action) {
            // inmutating style (old way)
            // return state.filter((task) => task.id !== action.payload);
            // Mutating style (new way since Redux uses Immer that handles inmmutability for you)
            const index = state.findIndex(task => task.id === action.payload)
            if (index !== -1) state.splice(index, 1)
        },
        complete(state, action) {
            // inmutating style (old way)
            // return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task );
            // Mutating style (new way since Redux uses Immer that handles inmmutability for you)
            const task = state.find(task => task.id === action.payload);
            if (task) { task.completed = !task.completed };
        },
    }
})

// export the action creators:
export const { add, remove, complete } = todoSlice.actions;

// export the reducer:
export default todoSlice.reducer;
