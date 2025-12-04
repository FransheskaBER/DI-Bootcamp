import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.js";
import usersReducer from "../features/users/usersSlice.js";

const appReducer = combineReducers({
    counterReducer,
    usersReducer,
});

const store = configureStore({
    reducer: appReducer,
});

export default store;