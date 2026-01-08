import type { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectTodos = (state: RootState) => state.todos.items;
export const selectFilter = (state: RootState) => state.todos.filter;

//input selector for "now" supplied by the caller/client
export const selectNow = (_state: RootState, now: number) => now;

export const selectFilteredTodos = createSelector(
    [selectTodos, selectFilter, selectNow],
    (todos, filter, now) => {
        const isOverdue = (dueDate: number | null, completed: boolean) => 
            dueDate !== null && dueDate < now && !completed;
        
        return todos.filter((t) => {
            const overdue = isOverdue(t.dueDate, t.completed);

            if (filter === "completed") return t.completed;
            if (filter === "incomplete") return !t.completed;
            if (filter === "overdue") return overdue;
            return true;
        });
    }
);
