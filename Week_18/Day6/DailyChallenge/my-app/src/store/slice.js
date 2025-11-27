import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: [],  // { id: "", title: "", date: "", done: false }
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        edit(state, action) {
            const { id, updates } = action.payload;
            const selectedTask = state.find(t => t.id === id);
            if (!selectedTask) return;
            Object.assign(selectedTask, updates);
        },
        remove(state, action) {
            const { id } = action.payload;
            return state.filter(t => t.id !== id);
        }
    },
});

export const { add, edit, remove } = tasksSlice.actions;
export default tasksSlice.reducer;
