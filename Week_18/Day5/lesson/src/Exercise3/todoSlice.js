import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => { state.todos.push(action.payload); },
        removeTodo: (state, action) => { state.todos = state.todos.filter((_, idx) => idx !== action.payload); },
        clearTodos: (state) => { state.todos = [] },
    },
});

// export action creators
export const { addTodo, removeTodo, clearTodos } = todoSlice.actions;

// export the reducer
export const todoReducer = todoSlice.reducer;


