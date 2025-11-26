import { configureStore } from "@reduxjs/toolkit";
import { todoReducer, addTodo, removeTodo } from "./todoSlice.js";

const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
})

console.log("Initial state:", store.getState());

// dispatch:
store.dispatch(addTodo("learnpython"));
store.dispatch(addTodo("learn java"));

// use selector to read the list
const selectorTodoList = (state) => state.todos.todos;
const currentTodos = selectorTodoList(store.getState());

console.log("todos after dispathing 2 add actions: ");
console.log(currentTodos);

// dispatch remove
store.dispatch(removeTodo(0));




