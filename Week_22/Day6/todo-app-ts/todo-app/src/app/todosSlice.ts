import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { type PayloadAction } from "@reduxjs/toolkit";

type Todo = {
    id: string;
    task: string;
    done: boolean;
    created_at: string;
};

export type Filter = "all" | "completed" | "incompleted";

interface TodoState {
    todos: Todo[];
    filter: Filter;
}

const initialState: TodoState = {
    todos: [],
    filter: "all",
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            const todo: Todo = {
                id: uuid(),
                task: action.payload,
                done: false,
                created_at: new Date().toString(),
            };
            state.todos.push(todo);
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter((t) => t.id !== action.payload);
        },
        toggleTodo(state, action: PayloadAction<string>) {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (!todo) return;
            todo.done = !todo.done;
        },
        setFilter(state, action: PayloadAction<Filter>) {
            state.filter = action.payload;
        },
    }
});

export const { addTodo, removeTodo, toggleTodo, setFilter } = todosSlice.actions;
export default todosSlice.reducer;

