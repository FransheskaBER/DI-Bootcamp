import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "../features/shoppingCartSlice.js";

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
    }
});

export default store;

