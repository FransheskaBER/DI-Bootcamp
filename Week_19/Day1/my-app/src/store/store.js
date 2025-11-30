import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "../features/likes/likeSlice.js";

const store = configureStore({
    reducer: {
        likes: likesReducer
    },
});

export default store;