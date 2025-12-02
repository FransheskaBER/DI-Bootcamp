import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todoList/todoSlice.js";


const appReducer = combineReducers({
    todoReducer,
});

const store = configureStore({
    reducer: appReducer,
});

export default store;