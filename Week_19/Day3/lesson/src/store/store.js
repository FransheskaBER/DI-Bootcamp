import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.js";

const appReducer = combineReducers({
    counterReducer,
});

const store = configureStore({
    reducer: appReducer,
});

export default store;