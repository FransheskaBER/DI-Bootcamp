import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "../features/inventorySlice.js";

const store = configureStore({
    reducer: {
        inventory: inventoryReducer,
    },
});

export default store;