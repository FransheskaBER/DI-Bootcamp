import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.ts";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// to help Typescript understand the type of your redux state, you need these types:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;