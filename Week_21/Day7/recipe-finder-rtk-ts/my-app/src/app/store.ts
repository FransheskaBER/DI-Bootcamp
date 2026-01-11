import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../features/recipe/recipesSlice";


export const store = configureStore({
    reducer: {
        recipe: recipesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;