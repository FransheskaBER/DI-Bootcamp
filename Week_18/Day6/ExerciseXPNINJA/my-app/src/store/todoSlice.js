import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    // [ { id: "", category: "", todos: [ id: "", title: "", completed: ""] } ... ]
    reducers: {
        createCategory(state, action ){
            state.push(action.payload);
        },
        addTodo(state, action) {
            const { catId, newTodo } = action.payload;
            const category = state.find(cat => cat.id === catId);
            if (category) {
                category.todos.push(newTodo);
            }
        },
        removeTodo(state, action) {
            const { catId, todoId } = action.payload;
            const category = state.find(cat => cat.id === catId);
            const index = category.todos.findIndex(todo => todo.id === todoId);
            if (index !== -1) category.todos.splice(index, 1);
        },
        completeTodo(state, action) {
            const { catId, todoId } = action.payload;
            const category = state.find(cat => cat.id === catId);
            const task = category.todos.find(task => task.id === todoId);
            if (task) { task.completed = !task.completed }
        },
        deleteAll(state, action) {
            const { catId } = action.payload;
            const category = state.find(cat => cat.id === catId);
            if (category) { category.todos = [] }
        },
    },
});

export const { createCategory, addTodo, removeTodo, completeTodo, deleteAll } = todoSlice.actions;
export default todoSlice.reducer;

