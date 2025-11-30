import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push(action.payload);
        },
        toggleTodo(state, action) {
            const task = state.find(t => t.id === action.payload);
            if (task) { task.done = !task.done }
        },
        removeTodo(state, action) {
            const index = state.findIndex(t => t.id === action.payload);
            if (index !== -1) state.splice(index, 1);
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;