import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

type todo = {
    id: number;
    title: string;
    completed: boolean;
    dueDate: number;
}

type todoState = {
    todos: todo[];
};

const initialState: todoState = {
    todos: [
        { id: Date.now(), title: "Walk pepper", completed: false, dueDate: new Date().getTime() }
    ]
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<todo>) {
            state.todos.push(action.payload);
        },
        toggleTodo(state, action: PayloadAction<{ id: number }>) {
            const todo = state.todos.find(t => t.id === action.payload.id)
            if (!todo) return;
            todo.completed = !todo.completed;
        },
        removeTodo(state, action: PayloadAction<{ id: number }>) {
            const todoIdx = state.todos.findIndex(t => t.id === action.payload.id);
            if (todoIdx !== -1) state.todos.splice(todoIdx, 1);
        }
    }
});

// Selectors
export const selectCompletedTodos = createSelector(
  [(state: RootState) => state.todos.todos],
  (todos) => todos.filter(t => t.completed)
);

export const selectUncompletedTodos = createSelector(
    [(state: RootState) => state.todos.todos], 
    (todos) => todos.filter(t => !t.completed)
);

export const selectOverdueTodos = createSelector(
    [(state: RootState) => state.todos.todos],
    (todos) => todos.filter(t => t.dueDate < Date.now())
);

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;


