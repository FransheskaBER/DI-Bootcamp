import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";
import authReducer from "./authSlice.js";

const store = configureStore({
    reducer: {
        categories: todoReducer,
        auth: authReducer,
    },
});

export default store;