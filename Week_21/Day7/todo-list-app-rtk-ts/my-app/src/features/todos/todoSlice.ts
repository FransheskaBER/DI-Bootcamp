import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
    dueDate: number | null;
};

export type TodosFilter = "all" | "completed" | "incomplete" | "overdue";

type TodosState = {
    items: Todo[];
    filter: TodosFilter;
};

const initialState: TodosState = {
    items: [],
    filter: "all",
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: {
            reducer(state, action: PayloadAction<Todo>) {
            state.items.push(action.payload);
            },
            prepare(title: string, dueDate: number | null) {
                return {
                    payload: {
                        id: Date.now(),
                        title, 
                        completed: false,
                        dueDate,
                    } as Todo,
                };
            },
        },
        updateTodo(state, action: PayloadAction<number>) {
            const task = state.items.find((item) => item.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        deleteTodo(state, action: PayloadAction<number>) {
            const idx = state.items.findIndex((item) => item.id === action.payload);
            if (idx === -1) return;
            state.items.splice(idx, 1);
        },
        setFilter(state, action: PayloadAction<TodosFilter>) {
            state.filter = action.payload;
        }
    },
});

export const { addTodo, updateTodo, deleteTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
