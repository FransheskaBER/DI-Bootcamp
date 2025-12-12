import postsReducer from "../features/posts/state/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        postsReducer,
    }
})