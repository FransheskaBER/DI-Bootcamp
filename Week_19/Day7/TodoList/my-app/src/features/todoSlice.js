import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, title: "Buy groceries", completed: false },
        { id: 2, title: "Finish React homework", completed: false },
        { id: 3, title: "Walk the dog", completed: false },
        { id: 4, title: "Clean the kitchen", completed: true },
        { id: 5, title: "Prepare presentation slides", completed: false },
        { id: 6, title: "Read 20 pages of a book", completed: false },
        { id: 7, title: "Reply to emails", completed: true },
        { id: 8, title: "Pay electricity bill", completed: false },
        { id: 9, title: "Study Redux selectors", completed: false },
        { id: 10, title: "Call mum", completed: true }
    ],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        removeTodo(state, action) {
            const index = state.todos.findIndex(t => t.id === action.payload);
            if (index !== -1) state.todos.splice(index, 1);
        }
    },
});


// SELECTORS:
export const selectAllTodos = state => state.todos;

export const selectCompletedTodos = createSelector(
    [selectAllTodos],
    (todos) => todos.filter(t => t.completed === true),
);
export const selectActiveTodos = createSelector(
    [selectAllTodos],
    (todos) => todos.filter(t => t.completed === false),
);
export const selectTodosLength = createSelector(
    [selectAllTodos],
    (todos) => todos.length,
);


export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
