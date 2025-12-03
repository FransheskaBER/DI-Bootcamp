import { createSlice, createSelector } from "@reduxjs/toolkit";
import { categories, tasks } from "../data.js";
import { DEFAULT_CAT_ID } from "../data.js";


const initialState = {
    categories,
    tasks,
}

const trackerSlice = createSlice({
    name: "tracker",
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },
        editTask(state, action) {
            const { id, updates } = action.payload;
            const task = state.tasks.find(t => t.id === id);
            if (!task) return;
            Object.assign(task, updates);
        },
        deleteTask(state, action) {
            const index = state.tasks.findIndex(t => t.id === action.payload);
            if (index !== -1) state.tasks.splice(index, 1);
        },
        addCat(state, action) {
            state.categories.push(action.payload);
        },
        editCat(state, action) {
            const { id, updates } = action.payload;
            const category = state.categories.find(cat => cat.id === id);
            if (!category) return;
            Object.assign(category, updates);
        },
        deleteCat(state, action) {
            const { catId } = action.payload;
            if (catId === DEFAULT_CAT_ID) return;

            const index = state.categories.findIndex(cat => cat.id === catId);
            if (index !== -1) { 
                state.categories.splice(index, 1);
            }

            state.tasks.forEach(task => {
                if (task.categoryId === catId) {
                    task.categoryId === DEFAULT_CAT_ID;
                }
            });
        },
        updateProgress(state, action) {
            const { id, newProgress } = action.payload;
            const task = state.tasks.find(t => t.id === id);
            if (!task) return;

            const safeProgress = Math.min(100, Math.max(0, newProgress));
            task.progress = safeProgress;

            task.completed = safeProgress === 100;
        },
    },
});


// SELECTORS:
export const selectAllCats = state => state.trackerReducer.categories;
export const selectAllTasks = state => state.trackerReducer.tasks;

export const selectCompletedTasks = createSelector(
    [selectAllTasks, (_, doneFilter) => doneFilter],
    (tasks, doneFilter) => {
        if (doneFilter === "") return tasks;
        return tasks.filter(t => t.completed === doneFilter);
    }
);

export const selectTasksByCategory = createSelector(
    [selectAllTasks, (_, categoryId) => categoryId],
    (tasks, categoryId) => {
        if (categoryId === "") return tasks;
        return tasks.filter(task => task.categoryId === categoryId);
    }
);

export const selectCategoryById = createSelector(
    [selectAllCats, (_, categoryId) => categoryId],
    (categories, categoryId) => {
        if (!categoryId) return categories;
        return categories.find(cat => cat.id === categoryId);
    }
)

export const { addTask, editTask, deleteTask, addCat, editCat, deleteCat, updateProgress } = trackerSlice.actions;
export default trackerSlice.reducer;
