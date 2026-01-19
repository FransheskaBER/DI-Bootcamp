import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import storiesSlice from "../features/storiesSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        stories: storiesSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;