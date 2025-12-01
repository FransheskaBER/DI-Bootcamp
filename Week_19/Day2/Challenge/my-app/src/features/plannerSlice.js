import { createSlice } from "@reduxjs/toolkit";

const plannerSlice = createSlice({
    name: "planner",
    initialState: { selectedDate: null, tasks: [] },
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload); // { id: "", task: "", done: "", date: ""}
        },
        editTask(state, action) {
            const { taskId, updates } = action.payload;
            const selectedTask = state.tasks.find(t => t.id === taskId);
            if (!selectedTask) return;
            Object.assign(selectedTask, updates);
        },
        deleteTask(state, action) {
            const taskIndex = state.tasks.findIndex(t => t.id === action.payload);
            if (taskIndex !== -1) state.tasks.splice(taskIndex, 1);
        },
        setSelectedDate(state, action) {
            state.selectedDate = action.payload;
        }
    },
});

export const { addTask, editTask, deleteTask, setSelectedDate } = plannerSlice.actions;
export default plannerSlice.reducer;