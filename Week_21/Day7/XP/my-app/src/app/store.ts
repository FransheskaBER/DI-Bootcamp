import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todoList/todoSlice";

const allReducers = combineReducers({
    counter: counterReducer,
    todos: todoReducer,
})
const store = configureStore({
    reducer: allReducers,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
