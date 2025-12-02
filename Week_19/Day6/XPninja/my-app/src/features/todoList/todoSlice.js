import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1,  title: "Buy milk",                 done: false },
        { id: 2,  title: "Walk the dog",             done: true },
        { id: 3,  title: "Finish React homework",    done: false },
        { id: 4,  title: "Clean the kitchen",        done: true },
        { id: 5,  title: "Call mum",                 done: false },
        { id: 6,  title: "Pay electricity bill",     done: true },
        { id: 7,  title: "Book dentist appointment", done: false },
        { id: 8,  title: "Read 20 pages",            done: false },
        { id: 9,  title: "Do laundry",               done: true },
        { id: 10, title: "Prepare lunch",            done: false }
    ],
    filter: "All",
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        }
    },
});

// Selectors:
const selectAllTodos = state => state.todoReducer.todos;
export const selectFilter = state => state.todoReducer.filter;

export const selectFilteredTodos = createSelector(
    [selectAllTodos, selectFilter],
    (todos, filter) => {
        switch (filter) {
            case "Done":
                return todos.filter(todo => todo.done === true);
            case "Undone":
                return todos.filter(todo => todo.done === false);
            default:
                return todos;
        }
    }
)

export const selectFilteredTodosCount = createSelector(
    [selectFilteredTodos],
    (todos) => todos.length
);


export const { setFilter } = todoSlice.actions;
export default todoSlice.reducer;
