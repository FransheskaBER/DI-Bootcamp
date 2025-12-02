import bookInventoryReducer from "../features/bookInventorySlice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        bookInventory: bookInventoryReducer,
    }
});

export default store;