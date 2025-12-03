import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "../features/trackerSlice.js";

const store = configureStore({
    reducer: {
        trackerReducer,
    },
});

export default store;