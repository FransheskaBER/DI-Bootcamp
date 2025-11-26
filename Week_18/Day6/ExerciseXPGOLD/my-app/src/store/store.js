import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";

const store = configureStore({
    reducer: {
        categories: todoReducer,
    },
});

export default store;
